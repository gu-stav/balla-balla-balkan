import Paragraph from "../Paragraph";

import styles from "./EpisodeLinks.module.css";

export const EpisodeLinkItem = ({ children, ...props }) => (
  <li className={styles.listItem} {...props}>
    <Paragraph>{children}</Paragraph>
  </li>
);

const EpisodeLinks = ({ children, ...props }) => (
  <ul className={styles.list} {...props}>
    {children}
  </ul>
);

export default EpisodeLinks;
