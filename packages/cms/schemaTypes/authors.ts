import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'body',
      title: 'Biografie',
      type: 'blockContent',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
