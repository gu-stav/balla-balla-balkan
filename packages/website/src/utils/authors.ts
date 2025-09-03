import { client } from "./client";

export async function getAuthors() {
  const authors = await client.fetch(`*[_type == "author"]`);
  return authors;
}
