import glob from 'tiny-glob'
import {readFile, writeFile} from 'node:fs/promises'
import {unified} from 'unified'
import matter from 'gray-matter'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkHtml from 'remark-html'
import slugify from 'slugify'
import {htmlToBlocks} from '@portabletext/block-tools'
import {JSDOM} from 'jsdom'
import {defineField, defineArrayMember, defineType} from 'sanity'
import {Schema} from '@sanity/schema'

const episodeType = defineType({
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Nummer',
      type: 'string',
      validation: (Rule) => Rule.regex(/^\d+$/).error('Nur Ziffern erlaubt (0-9)'),
    }),

    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imageCaption',
      title: 'Bild Caption',
      type: 'string',
    }),

    defineField({
      name: 'excerpt',
      title: 'Einleitung',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'richtext',
      title: 'Text',
      type: 'blockContent',
    }),

    defineField({
      name: 'appleLink',
      title: 'Apple Link',
      type: 'url',
    }),

    defineField({
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'url',
      description:
        "Die URL erhaltet ihr, wenn ihr in Spotify auf der Folge 'Share -> Copy Spotify URI' auswählt.",
    }),

    defineField({
      name: 'soundcloudLink',
      title: 'Soundcloud Link',
      type: 'url',
    }),

    defineField({
      name: 'ogImage',
      title: 'Social Media Vorschau Bild',
      type: 'image',
      description:
        'Das Bild sollte 1200x600px als Abmessung haben. Wenn kein Bild eingegeben wurde, wird das Coverbild als Vorschau verwendet. Von allen Bildern, die flacher als 3:2 im Format sind, werden Ausschnitte aus der Bildmitte verwendet.',
    }),

    defineField({
      name: 'ogTitle',
      title: 'Social Media Titel',
      type: 'string',
    }),

    defineField({
      name: 'ogDescription',
      title: 'Social Media Beschreibung',
      type: 'string',
    }),
  ],
})

const blockContentType = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.required().uri({allowRelative: false, scheme: ['http', 'https']}),
              },
            ],
          },
        ],
      },
    }),
  ],
})

const schema = Schema.compile({
  types: [blockContentType, episodeType],
})

const blockContentSchema = schema
  .get('episode')
  .fields.find((field) => field.name === 'richtext').type

async function getEpisodes() {
  const episodes = await glob('**/*.md', {
    cwd: '../../../content/episodes',
  })

  return episodes.map((file) => `../../../content/episodes/${file}`)
}

async function extractFileContents(path) {
  const content = await readFile(path, 'utf-8')
  return {path, content}
}

async function extractFrontmatter(fileContent) {
  const {data} = matter(fileContent)

  return data
}

async function extractMarkdown(fileContent) {
  return await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(remarkHtml)
    .process(fileContent)
}

async function convertToSanityDocument(jsonData, index) {
  const slug = slugify(jsonData.frontmatter.title, {
    lower: true,
    remove: /[*+~.()'"!:@?]/g,
    locale: 'de',
  })

  let richtext = []

  try {
    richtext = createPortableText(jsonData.frontmatter.title, jsonData.body)
  } catch (e) {
    console.error('Error creating portable text for:', jsonData.frontmatter.title)
  }

  return {
    _id: `episode-${index}`,
    _type: 'episode',
    title: jsonData.frontmatter.title,
    number:
      jsonData.frontmatter.number && jsonData.frontmatter.number.length > 0
        ? jsonData.frontmatter.number
        : undefined,
    slug: {
      current: slug,
    },
    excerpt: jsonData.frontmatter.excerpt,
    appleLink: jsonData.frontmatter.apple_link,

    publishedAt: jsonData.frontmatter.publication_at
      ? new Date(jsonData.frontmatter.publication_at).toISOString()
      : undefined,
    richtext,

    spotifyLink: jsonData.frontmatter.spotify_link,
    soundcloudLink: jsonData.frontmatter.soundcloud_link,

    image: {
      _type: 'image',
      _sanityAsset: `image@file://./upload/${jsonData.frontmatter.image.replace('/images/upload/', '')}`,
    },

    ogTitle:
      jsonData.frontmatter.og_title && jsonData.frontmatter.og_title !== jsonData.frontmatter.title
        ? jsonData.frontmatter.og_title
        : undefined,
    ogDescription:
      jsonData.frontmatter.og_description &&
      jsonData.frontmatter.og_description !== jsonData.frontmatter.excerpt
        ? jsonData.frontmatter.og_description
        : undefined,
    ogImage:
      jsonData.frontmatter.og_image && jsonData.frontmatter.og_image !== jsonData.frontmatter.image
        ? {
            _type: 'image',
            _sanityAsset: `image@file://./upload/${jsonData.frontmatter.og_image.replace('/images/upload/', '')}`,
          }
        : undefined,
  }
}

async function writeToFile(files) {
  await writeFile(
    './documents/documents.ndjson',
    files.map((file) => JSON.stringify(file)).join('\n'),
  )
}

function createPortableText(title, content) {
  const doc = `
    <html><body>
    ${content}
    </body></html>
  `

  return htmlToBlocks(doc, blockContentSchema, {
    parseHtml: (html) => new JSDOM(html).window.document,
  })
}

const episodes = await getEpisodes()
const episodeContentsRaw = await Promise.all(episodes.map(extractFileContents))
const episodeJSON = await Promise.all(
  episodeContentsRaw.map(async ({path, content}) => {
    const frontmatter = await extractFrontmatter(content)
    let body = ''

    for (let block of frontmatter?.blocks ?? []) {
      body += await extractMarkdown(block.richtext)
      body += '\n'
    }

    return {
      path,
      frontmatter,
      body,
    }
  }),
)

const documents = await Promise.all(episodeJSON.map(convertToSanityDocument))

await writeToFile(documents)
