import Author from "./Author";

import styles from "./Authors.module.css";

const Authors = ({ authors }) => (
  <section className={styles.authors}>
    <div className={styles.inner}>
      {authors.map((author) => (
        <Author key={`author-${author.title}`} {...author} />
      ))}
    </div>
  </section>
);

export default Authors;
