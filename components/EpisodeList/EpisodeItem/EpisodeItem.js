import Image from "next/image";
import Link from "next/link";

import Button from "../../Button";
import Headline from "../../Headline";

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
      <Image src={image} objectFit="cover" layout="fill" />

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

      <Button>Episode abspielen</Button>
    </div>
  </div>
);

export default EpisodeItem;
