import { client } from "./client";

export async function getEpisode(slug: string) {
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

export async function getEpisodes(limit = Infinity) {
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
  } | order(publishedAt desc) ${limit === Infinity ? '' : `[0...${limit}]`}`);
  return episodes;
}
