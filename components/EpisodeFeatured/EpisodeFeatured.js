import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import Headline from "../Headline";

import styles from "./EpisodeFeatured.module.css";

const EpisodeFeatured = ({ title, slug, subtitle, image, backgroundImage }) => (
  <section className={styles.section}>
    {backgroundImage && (
      <Image src={backgroundImage} width={1500} height={500} layout="responsive" />
    )}

    <div className={styles.inner}>
      <div>
        <Link href={slug}>
          <a className={styles.link}>
            <Headline tag={2} as={1}>
              <small className={styles.tagline}>Neueste Folge</small>

              <span className={styles.title}>{title}</span>

              {subtitle && <span>{subtitle}</span>}
            </Headline>
          </a>
        </Link>

        <Button invert>Episode abspielen</Button>
      </div>

      <div>
        <Image src={image} width={400} height={400} />
      </div>
    </div>
  </section>
);

export default EpisodeFeatured;
