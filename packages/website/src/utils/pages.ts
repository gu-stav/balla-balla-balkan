import { client } from "./client";

export async function getPage(slug: string) {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "${slug}"][0]`,
  );

  return page;
}

export async function getPages() {
  const pages = await client.fetch(`*[_type == "page"]`);
  return pages;
}
