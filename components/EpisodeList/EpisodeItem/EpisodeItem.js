import Image from "next/image";
import Link from "next/link";

import Button from "../../Button";
import FollowList from "../../FollowList";
import Headline from "../../Headline";
import Paragraph from "../../Paragraph";
import Stack from "../../Stack";

import { usePlayer } from "../../../store/player";

import styles from "./EpisodeItem.module.css";

const EpisodeItem = ({
  title,
  path,
  excerpt,
  image,
  number,
  externalLinks,
  soundcloud_link,
}) => {
  const { setEpisode } = usePlayer();

  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src={image} width={280} height={280} objectFit="cover" />

        {number && (
          <span className={styles.number}>{number}</span>
        )}
      </div>

      <div className={styles.contentContainer}>
        <Link href={path}>
          <a className={styles.link}>
            <Headline level={2} className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
            </Headline>
          </a>
        </Link>

        <Paragraph className={styles.excerpt}>{excerpt}</Paragraph>

        <Stack direction="horizontal" gap="mini" className={styles.fauxLinkStandout}>
          <Button
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

            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.actionIcon}>
              <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </Button>

          <FollowList items={externalLinks} />
        </Stack>
      </div>

      <Link href={path}>
        <a className={styles.fauxLink} tabIndex="-1" aria-hidden="true">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default EpisodeItem;
