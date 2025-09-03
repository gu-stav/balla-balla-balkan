import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Startseite Bild',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Blog Titel',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'description',
      title: 'Blog Beschreibung',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'social_media',
      title: 'Social Media Accounts',
      type: 'array',
      of: [{type: 'socialAccount'}],
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})
