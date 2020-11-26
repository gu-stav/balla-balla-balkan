import Stack from "../Stack";

import styles from "./Article.module.css";

const Article = ({ children }) => (
  <div className={styles.container}>
    <Stack gap="tiny">{children}</Stack>
  </div>
);

export default Article;
