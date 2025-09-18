import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'ogImageFallback',
      title: 'Fallback Social Media Bild',
      description: 'Dieses Bild wird verwendet, wenn kein spezifisches Bild für eine Seite oder einen Beitrag festgelegt ist.',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Seiten-Titel',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Seiten-Beschreibung',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(10).max(160),
    }),
    defineField({
      name: 'social_media',
      title: 'Social Media Accounts',
      type: 'array',
      of: [{type: 'socialAccount'}],
    }),
  ],
})
