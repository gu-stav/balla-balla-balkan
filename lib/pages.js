import { readFileContents, createSlug } from "./content";

export const getPages = () => {
  const pages = readFileContents("content/pages");
  const extendedPages = pages.map((page) => ({
    ...page.data,
    slug: createSlug(page.data.title),
  }));

  return extendedPages;
};

export const getPage = (slug) => {
  const pages = getPages();

  const page = pages.filter(({ slug: pageSlug }) => pageSlug === slug);

  if (!page || page.length === 0) {
    return null;
  }

  return page[0];
};
