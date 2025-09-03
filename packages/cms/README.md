## Balla Balla Balkan – Sanity Studio

This Studio replaces the previous Netlify CMS configuration with strict Sanity schemas.

- Episodes: `episode` documents with slug pattern `<number>-<title>`, required `publicationAt`, image, and links.
- Authors: `author` documents with name and rich text biography.
- Pages: `page` documents with title, slug, and rich text blocks.
- Settings: singleton `settings` document (open via “Einstellungen” in the desk), with homepage image, blog title/description, and social media accounts.

Portable Text (`blockContent`) is configured to allow: bold, italic, links, H2/H3, and bullet lists – matching the previous markdown options.

Development

- Start the Studio: `pnpm --filter website dev` (or `npm run dev` in `packages/cms`).
