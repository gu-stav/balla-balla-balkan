import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import FollowList from "../FollowList";
import Headline from "../Headline";
import Stack from "../Stack";

import { usePlayer } from "../../store/player";

import styles from "./EpisodeFeatured.module.css";

const Title = ({ tagline, title }) => (
  <Headline tag={2} as={1} className={styles.titleContainer}>
    <small className={styles.tagline}>{tagline}</small>

    <span className={styles.title}>{title}</span>
  </Headline>
);

const EpisodeFeatured = ({
  title,
  path,
  tagline,
  image,
  backgroundImage,
  number,
  externalLinks,
  soundcloud_link,
}) => {
  const { setEpisode } = usePlayer();

  return (
    <section className={styles.section}>
      {backgroundImage && (
        <div className={styles.backgroundImageContainer}>
          <div className={styles.backgroundImageInnerContainer}>
            <Image
              src={backgroundImage}
              objectFit="cover"
              layout="fill"
              className={styles.backgroundImage}
              alt=""
            />
          </div>
        </div>
      )}

      <div className={styles.inner}>
        <div className={styles.contentContainer}>
          {path ? (
            (<Link href={path} className={styles.link}>

              <Title title={title} tagline={tagline} />

            </Link>)
          ) : (
            <Title title={title} tagline={tagline} />
          )}
        </div>

        <div className={styles.imageContainer}>
          <Image src={image} width={340} height={340} objectFit="cover" alt="" />
        </div>

        <Stack
          direction="horizontal"
          gap="mini"
          className={`${styles.actionContainer} ${styles.fauxLinkStandout}`}
        >
          <Button
            invert
            onClick={() =>
              setEpisode({
                title,
                image,
                number,
                soundcloud_link,
              })
            }
          >
            Anhören

            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.acionIcon}>
              <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </Button>

          <FollowList theme="light" items={externalLinks} />
        </Stack>

        {path && (
          (<Link href={path} className={styles.fauxLink} tabIndex="-1" aria-hidden="true">

            {title}

          </Link>)
        )}
      </div>
    </section>
  );
};

export default EpisodeFeatured;
