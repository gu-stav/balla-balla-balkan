import {defineField, defineType} from 'sanity'

export const socialTypeOptions = [
  {title: 'Apple Podcast', value: 'apple'},
  {title: 'Soundcloud', value: 'soundcloud'},
  {title: 'Spotify', value: 'spotify'},
]

export const socialAccount = defineType({
  name: 'socialAccount',
  title: 'Social Media Account',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: socialTypeOptions,
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'type', subtitle: 'url'},
    prepare({title, subtitle}) {
      const label = socialTypeOptions.find((o) => o.value === title)?.title || title
      return {title: label, subtitle}
    },
  },
})
