import Authors from "../components/Authors";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeItem from "../components/EpisodeItem";
import Layout from "../components/Layout";

import { getAuthors } from "../lib/authors";
import { getEpisodes } from "../lib/episodes";

const HomePage = ({ authors, episodes }) => (
  <Layout>
    <EpisodeFeatured />

    <ul>
      {episodes.map((episode) => (
        <li>
          <EpisodeItem {...episode} />
        </li>
      ))}
    </ul>

    <Authors authors={authors} />
  </Layout>
);

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
