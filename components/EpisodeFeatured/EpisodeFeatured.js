import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import FollowList from "../FollowList";
import Headline from "../Headline";
import Stack from "../Stack";

import { usePlayer } from "../../store/player";

import styles from "./EpisodeFeatured.module.css";

const Title = ({ tagline, title, subtitle }) => (
  <Headline tag={2} as={1} className={styles.titleContainer}>
    <small className={styles.tagline}>{tagline}</small>

    <span className={styles.title}>{title}</span>

    {subtitle && <span>{subtitle}</span>}
  </Headline>
);

const EpisodeFeatured = ({
  title,
  path,
  subtitle,
  tagline,
  image,
  backgroundImage,
  number,
  externalLinks,
}) => {
  const { setEpisode } = usePlayer();

  return (
    <section className={styles.section}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          width={1500}
          height={500}
          layout="responsive"
        />
      )}

      <div className={styles.inner}>
        <div className={styles.contentContainer}>
          {path ? (
            <Link href={path}>
              <a className={styles.link}>
                <Title title={title} subtitle={subtitle} tagline={tagline} />
              </a>
            </Link>
          ) : (
            <Title title={title} subtitle={subtitle} tagline={tagline} />
          )}
        </div>

        <div className={styles.imageContainer}>
          <Image src={image} width={340} height={340} objectFit="cover" />
        </div>

        <Stack
          direction="horizontal"
          gap="tiny"
          className={styles.actionContainer}
        >
          <Button
            invert
            onClick={() =>
              setEpisode({
                title,
                image,
                number,
              })
            }
          >
            Episode abspielen
          </Button>

          <FollowList theme="light" items={externalLinks} />
        </Stack>
      </div>
    </section>
  );
};

export default EpisodeFeatured;
