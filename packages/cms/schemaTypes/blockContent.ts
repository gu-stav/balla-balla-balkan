import {defineArrayMember, defineType} from 'sanity'

// Portable Text configuration mirroring Netlify CMS markdown buttons and modes
export default defineType({
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
