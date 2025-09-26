import { client } from "./client";

type Page = {
  title: string;
  slug: { current: string };
  richtext: any[];
};

export async function getPage(slug: string): Promise<Page | null> {
  const page = await client.fetch(
    `*[_type == "page" && slug.current == "${slug}"][0]`,
  );

  return page;
}

export async function getPages(): Promise<Page[]> {
  const pages = await client.fetch(`*[_type == "page"]`);
  return pages;
}
