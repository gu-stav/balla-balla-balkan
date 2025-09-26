import { client } from "./client";

export type Episode = {
  title: string;
  excerpt: string;
  richtext: any[];
  slug: string;
  appleLink?: string;
  soundcloudLink?: string;
  spotifyLink?: string;
  imageUrl: string;
  imageCaption?: string;
  number: number;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  publishedAt?: string;
};

export async function getEpisode(slug: string): Promise<Episode | null> {
  const episode = await client.fetch(
    `*[_type == "episode" && slug.current == "${slug}"]{
      "title": title,
      "excerpt": excerpt,
      "richtext": richtext,
      "slug": slug.current,
      "appleLink": appleLink,
      "soundcloudLink": soundcloudLink,
      "spotifyLink": spotifyLink,
      "imageUrl": image.asset->url,
      "imageCaption": imageCaption,
      "number": number,
      "ogImage": ogImage.asset->url,
      "ogTitle": ogTitle,
      "ogDescription": ogDescription,
    }[0]`,
  );

  return episode;
}

export async function getEpisodes(limit = Infinity): Promise<Episode[]> {
  const episodes = await client.fetch(`*[_type == "episode"] {
    "title": title,
    "excerpt": excerpt,
    "slug": slug.current,
    "appleLink": appleLink,
    "soundcloudLink": soundcloudLink,
    "spotifyLink": spotifyLink,
    "imageUrl": image.asset->url,
    "imageCaption": imageCaption,
    "number": number,
    "publishedAt": publishedAt
  } | order(publishedAt desc) ${limit === Infinity ? "" : `[0...${limit}]`}`);
  return episodes;
}
