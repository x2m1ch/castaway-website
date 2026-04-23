import imageCardOne from "../assets/images/latest-episodes/image-card-one.png";
import imageCardTwo from "../assets/images/latest-episodes/image-card-two.png";
import imageCardThree from "../assets/images/latest-episodes/image-card-three.png";

import { LatestEpisodesCard } from "../components/LatestEpisodesCard";

import "./styles/latest-episodes.css";

export const LatestEpisodes = () => {
  return (
    <section className="latest-episodes">
      <section className="latest-episodes-heading">
        <h2>Latest Episodes</h2>
        <button>View all episodes</button>
      </section>
      <section className="episodes-card-section">
        <LatestEpisodesCard
          src={imageCardOne}
          tagName="Gear"
          episodeNumber={3}
          cardHeading="Should you get outboard audio gear?"
          cardDescription="Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."
        />
        <LatestEpisodesCard
          src={imageCardTwo}
          tagName="Gear"
          episodeNumber={2}
          cardHeading="Mic tricks to take you to the next level"
          cardDescription="Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
        />
        <LatestEpisodesCard
          src={imageCardThree}
          tagName="Gear"
          episodeNumber={1}
          cardHeading="The best microphone under $200"
          cardDescription="With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks."
        />
      </section>
    </section>
  );
};
