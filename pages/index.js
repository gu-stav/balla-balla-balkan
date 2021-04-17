import About from "../components/About";
import Authors from "../components/Authors";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Stack from "../components/Stack";

import { getAuthors } from "../lib/authors";
import { getEpisodes } from "../lib/episodes";
import { getSettings } from "../lib/settings";

const HomePage = ({ authors, episodes, settings }) => {
  const featuredEpisode = episodes.slice(0, 1)[0];
  const recentEpisodes = episodes.slice(1, episodes.length);

  return (
    <Layout footerMargin={false}>
      <SEO />

      <Stack center>
        <EpisodeFeatured
          tagline="Neueste Folge"
          title={featuredEpisode.title}
          image={featuredEpisode.image}
          path={featuredEpisode.path}
          image={featuredEpisode.image}
          externalLinks={featuredEpisode.externalLinks}
          backgroundImage={settings?.image}
          number={featuredEpisode.number}
          soundcloud_link={featuredEpisode.soundcloud_link}
        />

        <EpisodeList
          episodes={recentEpisodes}
          moreLabel="Ältere Episoden"
          moreHref="/episoden/" />

        <div style={{ width: "100%" }}>
          <About {...settings} />
          <Authors authors={authors} />
        </div>
      </Stack>
    </Layout>
  );
};

export async function getStaticProps() {
  const authors = getAuthors();
  const episodes = getEpisodes(5);
  const settings = getSettings();

  return {
    props: {
      authors,
      episodes,
      settings,
    },
  };
}

export default HomePage;
