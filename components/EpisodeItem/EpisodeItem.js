const EpisodeItem = ({ title, subtitle, excerpt, length, number }) => (
  <div>
    {length}

    <h2>
      {number}
      {title}
      {subtitle && (
        <span>{subtitle}</span>
      )}
    </h2>

    <p>{excerpt}</p>
  </div>
);

export default EpisodeItem;
