import "./styles/latest-episodes-card.css";

export const LatestEpisodesCard = (props: {
  src: string;
  tagName: string;
  episodeNumber: number;
  cardHeading: string;
  cardDescription: string;
}) => {
  return (
    <article className="latest-episodes-card">
      <img src={props.src} alt="" />
      <section className="episodes-card-body">
        <div className="episodes-card-tag">{props.tagName}</div>
        <section className="episodes-card-none-tag">
          <p className="episode-number">Episode {props.episodeNumber}</p>
          <h2 className="episodes-card-heading">{props.cardHeading}</h2>
          <p className="episodes-card-description">{props.cardDescription}</p>
          <button>View Episodes Details</button>
        </section>
      </section>
    </article>
  );
};
