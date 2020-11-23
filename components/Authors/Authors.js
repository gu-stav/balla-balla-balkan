import Author from "./Author";

const Authors = ({ authors }) => (
  <section>
    {authors.map((author) => (
      <Author {...author} />
    ))}
  </section>
);

export default Authors;
