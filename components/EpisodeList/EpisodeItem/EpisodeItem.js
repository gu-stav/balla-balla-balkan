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
  subtitle,
  excerpt,
  length,
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

        <span className={styles.number}>{number}</span>
      </div>

      <div className={styles.contentContainer}>
        <Link href={path}>
          <a className={styles.link}>
            <Headline level={2} className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
              {subtitle && <span>{subtitle}</span>}
            </Headline>
          </a>
        </Link>

        <Paragraph className={styles.excerpt}>{excerpt}</Paragraph>

        <Stack direction="horizontal" gap="tiny">
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
            Episode abspielen
          </Button>

          <FollowList items={externalLinks} />
        </Stack>
      </div>
    </div>
  );
};

export default EpisodeItem;
