import { client } from "./client";

type Author = {
  title: string;
  body: Record<string, unknown>[];
}

export async function getAuthors(): Promise<Author[]> {
  const authors = await client.fetch(`*[_type == "author"]`);
  return authors;
}
