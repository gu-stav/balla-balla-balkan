import Link from "next/link";

import styles from "./EpisodeLinks.module.css";

const EpisodeLinks = ({ links = [] }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {links.map(({ text, url }) => (
        <li className={styles.listItem}>
          <Link href={url}>
            <a className={styles.item}>{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeLinks;
