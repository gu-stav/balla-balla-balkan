const EpisodeFeatured = ({ title, subtitle }) => (
  <section>
    <h2>
      {title}

      {subtitle && <span>{subtitle}</span>}
    </h2>
  </section>
);

export default EpisodeFeatured;
