import {defineField, defineType} from 'sanity'

export default defineType({
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
        slugify: (input: string, _?, context?: any) => {
          const base = input
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .slice(0, 96)
          const num = context?.parent?.number?.toString()?.trim()
          return num ? `${num}-${base}` : base
        },
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
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
