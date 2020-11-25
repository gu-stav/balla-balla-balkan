import { readFileContents, createSlug } from "./content";

const sortByPublicationDate = (
  { data: { publication_at: d1 } },
  { data: { publication_at: d2 } }
) => {
  if (d1 < d2) {
    return 1;
  }

  if (d1 > d2) {
    return -1;
  }

  return 0;
};

export const getEpisodes = (limit = false) => {
  const episodes = readFileContents("content/episodes");

  return episodes
    .sort(sortByPublicationDate)
    .map((episode) => ({
      ...episode.data,
      path: `/episode/${createSlug(episode.data.title)}`,
      slug: `${createSlug(episode.data.title)}`,
      publication_at: episode.data.publication_at.toString(),
    }))
    .slice(0, limit || episodes.length - 1);
};

export const getEpisode = (slug) => {
  const episodes = getEpisodes();

  return episodes.filter(({ slug: episodeSlug }) => episodeSlug === slug)[0];
};
