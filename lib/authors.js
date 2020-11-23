import { readFileContents } from "./content";

export const getAuthors = () => {
  const authors = readFileContents("content/authors");

  return authors.map((author) => ({
    ...author.data,
  }));
};
