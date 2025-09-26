import { client } from "./client";

export type Author = {
  title: string;
  body: any[];
}

export async function getAuthors(): Promise<Author[]> {
  const authors = await client.fetch(`*[_type == "author"]`);
  return authors;
}
