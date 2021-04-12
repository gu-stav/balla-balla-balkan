import { getEpisode, getEpisodes } from "../../lib/episodes";
import { getSettings } from "../../lib/settings";

import Article from "../../components/Article";
import Blocks from "../../components/Blocks";
import EpisodeFeatured from "../../components/EpisodeFeatured";
import EpisodeLinks from "../../components/EpisodeLinks";
import Headline from "../../components/Headline";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Stack from "../../components/Stack";

const EpisodePage = ({
  episode: { title, number, excerpt, image, blocks, links, externalLinks, soundcloud_link },
  settings,
}) => (
  <Layout>
    <SEO title={title} />

    <Stack gap="tiny" center>
      <EpisodeFeatured
        tagline={`Episode ${number}`}
        title={title}
        image={image}
        backgroundImage={settings.image}
        externalLinks={externalLinks}
        number={number}
        soundcloud_link={soundcloud_link}
      />
      <article>
        <Article>
          {blocks && (
            <Blocks
              blocks={[
                {
                  type: "richtext",
                  richtext: `**${excerpt}**`,
                },

                ...blocks,
              ]}
            />
          )}

          {links && (
            <>
              <Headline level={2}>Episoden Links</Headline>

              <EpisodeLinks links={links} />
            </>
          )}
        </Article>
      </article>
    </Stack>
  </Layout>
);

export async function getStaticPaths() {
  const episodes = getEpisodes();

  return {
    fallback: false,
    paths: episodes.map(({ path }) => path),
  };
}

export async function getStaticProps({ params: { slug } }) {
  const episode = getEpisode(slug);
  const settings = getSettings();

  return {
    props: {
      episode,
      settings,
    },
  };
}

export default EpisodePage;
