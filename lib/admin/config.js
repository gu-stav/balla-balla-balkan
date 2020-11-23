const SOCIAL_MEDIA_TYPES = [
  {
    label: 'Instagram',
    value: 'instagram'
  },

  {
    label: 'Apple Podcast',
    value: 'apple'
  },

  {
    label: 'Soundcloud',
    value: 'soundcloud'
  },

  {
    label: 'Spotify',
    value: 'spotify'
  },
];

export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'jib-collective/balla-balla-balkan',
    branch: 'develop',
    base_url: 'https://neu.ballaballa-balkan.de',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/images/upload',
  public_folder: '/images/upload',
  collections: [
    {
      name: 'episodes',
      label: 'Episoden',
      label_singular: 'Episode',
      folder: 'content/episodes',
      create: true,
      editor: {
        preview: false
      },
      slug: '{{number}}-{{slug}}',
      fields: [
        {
          label: 'Nummer',
          name: 'number',
          widget: 'number',
          required: true,
          value_type: 'int',
        },

        {
          label: 'Publiziert am',
          name: 'publication_at',
          widget: 'datetime',
          time_format: false,
          required: true,
        },

        {
          label: 'Bild',
          name: 'image',
          widget: 'image',
          required: true,
        },

        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
          required: true,
        },

        {
          label: 'Untertitel',
          name: 'subtitle',
          widget: 'string',
          required: false,
        },

        {
          label: 'Einleitung',
          name: 'excerpt',
          widget: 'text',
          required: false,
        },
      ],
    },

    {
      name: 'authors',
      label: 'Autoren',
      label_singular: 'Autor',
      folder: 'content/authors',
      create: true,
      editor: {
        preview: false
      },
      fields: [
        {
          label: 'Name',
          name: 'title',
          widget: 'string',
          required: true,
        },

        {
          label: 'Biografie',
          name: 'body',
          widget: 'markdown',
          required: true,
        },
      ],
    },

    {
      name: 'settings',
      label: 'Einstellungen',
      label_singular: 'Einstellungen',
      files: [
        {
          name: "blog",
          label: "Blog Einstellungen",
          file: 'content/settings.md',
          editor: {
            preview: false
          },
          fields: [
            {
              label: 'Blog Beschreibung',
              name: 'description',
              widget: 'text',
              required: true,
            },

            {
              label: 'Social Media Accounts',
              name: 'social_media',
              widget: 'list',
              allow_add: true,
              label_singular: 'Account',
              summary: '{{fields.type}}',
              fields: [
                {
                  label: "Typ",
                  name: 'type',
                  widget: 'select',
                  options: SOCIAL_MEDIA_TYPES
                },

                {
                  label: "URL",
                  name: 'url',
                  widget: 'string',
                }
              ]
            },
          ],
        }
      ],
    },
  ],
};
