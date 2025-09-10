import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
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
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'richtext',
      title: 'Text',
      type: 'blockContent',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
