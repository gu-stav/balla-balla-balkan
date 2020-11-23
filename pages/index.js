import Authors from "../components/Authors";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

import { getAuthors } from "../lib/authors";
import { getEpisodes } from "../lib/episodes";

const HomePage = ({ authors, episodes }) => {
  const featuredEpisode = episodes.slice(0, 1)[0];
  const recentEpisodes = episodes.slice(1, episodes.length);

  return (
    <Layout>
      <Stack>
        <EpisodeFeatured {...featuredEpisode} />
        <EpisodeList episodes={episodes} />
        <Authors authors={authors} />
      </Stack>
    </Layout>
  );
}

export async function getStaticProps() {
  const authors = getAuthors();
  const episodes = getEpisodes(5);

  return {
    props: {
      authors,
      episodes,
    },
  };
}

export default HomePage;
