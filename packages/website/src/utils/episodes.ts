import { client } from "./client";

export async function getEpisode(slug: string) {
  const episode = await client.fetch(
    `*[_type == "episode" && slug.current == "${slug}"][0]`,
  );

  return episode;
}

export async function getEpisodes() {
  const episodes = await client.fetch(`*[_type == "episode"] {
    "title": title,
    "excerpt": excerpt,
    "slug": slug.current,
    "appleLink": appleLink,
    "soundcloudLink": soundcloudLink,
    "spotifyLink": spotifyLink,
    "imageUrl": image.asset->url
  }`);
  return episodes;
}
