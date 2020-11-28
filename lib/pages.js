import { readFileContents, createSlug } from "./content";

export async function getPages() {
  const pages = readFileContents("content/pages");

  return pages.map((page) => ({
    ...page.data,
    slug: createSlug(page.data.title),
  }));
}

export async function getPage(slug) {
  const pages = getPages();
  const page = pages.filter(({ slug: pageSlug }) => pageSlug === slug);

  if (!page || page.length === 0) {
    return null;
  }

  return page[0];
}
