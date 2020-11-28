const SOCIAL_MEDIA_TYPES = [
  {
    label: "Instagram",
    value: "instagram",
  },

  {
    label: "Apple Podcast",
    value: "apple",
  },

  {
    label: "Soundcloud",
    value: "soundcloud",
  },

  {
    label: "Spotify",
    value: "spotify",
  },
];

const FLEXIBLE_BLOCKS = {
  label: "Inhalt",
  name: "blocks",
  widget: "list",
  types: [
    {
      label: "Text",
      name: "richtext",
      widget: "object",
      fields: [
        {
          label: "Text",
          name: "richtext",
          widget: "markdown",
          buttons: [
            "bold",
            "italic",
            "link",
            "heading-two",
            "heading-three",
            "bulleted-list",
          ],
          modes: ["rich_text"],
        },
      ],
    },
  ],
};

export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "jib-collective/balla-balla-balkan",
    branch: "develop",
    base_url: "https://neu.ballaballa-balkan.de",
    auth_endpoint: "api/auth",
  },
  media_folder: "public/images/upload",
  public_folder: "/images/upload",
  collections: [
    {
      name: "episodes",
      label: "Episoden",
      label_singular: "Episode",
      folder: "content/episodes",
      create: true,
      editor: {
        preview: false,
      },
      slug: "{{number}}-{{slug}}",
      fields: [
        {
          label: "Nummer",
          name: "number",
          widget: "string",
          required: false,
        },

        {
          label: "Publiziert am",
          name: "publication_at",
          widget: "datetime",
          time_format: false,
          required: true,
        },

        {
          label: "Bild",
          name: "image",
          widget: "image",
          required: true,
        },

        {
          label: "Bild Caption",
          name: "image_caption",
          widget: "string",
          required: false,
        },

        {
          label: "Länge",
          name: "length",
          widget: "string",
          required: true,
        },

        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: true,
        },

        {
          label: "Untertitel",
          name: "subtitle",
          widget: "string",
          required: false,
        },

        {
          label: "Apple Link",
          name: "apple_link",
          widget: "string",
          required: false,
        },

        {
          label: "Spotify Link",
          name: "spotify_link",
          widget: "string",
          required: false,
          hint:
            "Die URL erhaltet ihr, wenn ihr in Spotify auf der Folge 'Share -> Copy Spotify URI' auswählt.",
        },

        {
          label: "Soundcloud Link",
          name: "soundcloud_link",
          widget: "string",
          required: true,
        },

        {
          label: "Einleitung",
          name: "excerpt",
          widget: "text",
          required: false,
        },

        FLEXIBLE_BLOCKS,
      ],
    },

    {
      name: "authors",
      label: "Autoren",
      label_singular: "Autor",
      folder: "content/authors",
      create: true,
      editor: {
        preview: false,
      },
      fields: [
        {
          label: "Name",
          name: "title",
          widget: "string",
          required: true,
        },

        {
          label: "Biografie",
          name: "body",
          widget: "markdown",
          required: true,
        },
      ],
    },

    {
      name: "pages",
      label: "Seiten",
      label_singular: "Seite",
      folder: "content/pages",
      create: true,
      editor: {
        preview: false,
      },
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: true,
        },

        FLEXIBLE_BLOCKS
      ],
    },

    {
      name: "settings",
      label: "Einstellungen",
      label_singular: "Einstellungen",
      files: [
        {
          name: "blog",
          label: "Blog Einstellungen",
          file: "content/settings.md",
          editor: {
            preview: false,
          },
          fields: [
            {
              label: "Startseite Bild",
              name: "image",
              widget: "image",
              required: true,
            },

            {
              label: "Blog Titel",
              name: "title",
              widget: "string",
              required: true,
            },

            {
              label: "Blog Beschreibung",
              name: "description",
              widget: "text",
              required: true,
            },

            {
              label: "Social Media Accounts",
              name: "social_media",
              widget: "list",
              allow_add: true,
              label_singular: "Account",
              summary: "{{fields.type}}",
              fields: [
                {
                  label: "Typ",
                  name: "type",
                  widget: "select",
                  options: SOCIAL_MEDIA_TYPES,
                },

                {
                  label: "URL",
                  name: "url",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
