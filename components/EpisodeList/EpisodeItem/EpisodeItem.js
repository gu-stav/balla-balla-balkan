import Image from "next/image";
import Link from "next/link";

import Button from "../../Button";
import FollowList from "../../FollowList";
import Headline from "../../Headline";
import Stack from "../../Stack";

import styles from "./EpisodeItem.module.css";

const EpisodeItem = ({
  title,
  slug,
  subtitle,
  excerpt,
  length,
  image,
  number,
}) => (
  <div className={styles.item}>
    <div className={styles.imageContainer}>
      <Image src={image} width={280} height={280} objectFit="cover" />

      <span className={styles.number}>{`${number}`.padStart(2, "0")}</span>
    </div>

    <div className={styles.contentContainer}>
      <Link href={slug}>
        <a className={styles.link}>
          {length}

          <Headline level={2} className={styles.titleContainer}>
            <span className={styles.title}>{title}</span>
            {subtitle && <span>{subtitle}</span>}
          </Headline>
        </a>
      </Link>

      <p className={styles.excerpt}>{excerpt}</p>

      <Stack direction="horizontal">
        <Button>Episode abspielen</Button>

        <FollowList
          items={[
            ["apple", "https://apple.com", "Apple"],
            ["spotify", "https://spotify.com", "Spotify"],
            ["soundcloud", "https://soundcloud.com", "Soundcloud"],
          ]}
        />
      </Stack>
    </div>
  </div>
);

export default EpisodeItem;
