import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import FollowList from "../FollowList";
import Headline from "../Headline";
import Stack from "../Stack";

import styles from "./EpisodeFeatured.module.css";

const EpisodeFeatured = ({ title, slug, subtitle, image, backgroundImage }) => (
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
        <Link href={slug}>
          <a className={styles.link}>
            <Headline tag={2} as={1} className={styles.titleContainer}>
              <small className={styles.tagline}>Neueste Folge</small>

              <span className={styles.title}>{title}</span>

              {subtitle && <span>{subtitle}</span>}
            </Headline>
          </a>
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <Image src={image} width={340} height={340} objectFit="cover" />
      </div>

      <Stack direction="horizontal" className={styles.actionContainer}>
        <Button invert>Episode abspielen</Button>

        <FollowList theme="light" items={[
          ['apple', 'https://apple.com', 'Apple'],
          ['spotify', 'https://spotify.com', 'Spotify'],
          ['soundcloud', 'https://soundcloud.com', 'Soundcloud']
        ]} />
      </Stack>
    </div>
  </section>
);

export default EpisodeFeatured;
