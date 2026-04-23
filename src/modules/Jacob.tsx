import jacob from "../assets/images/jacob/jacob.png";
import arrow from "../assets/images/jacob/arrow.png";

import "./styles/jacob.css";

export const Jacob = () => {
  return (
    <section className="jacob">
      <section className="jacob-body">
        <img src={arrow} alt="" />
        <section>
          <p className="tag">Meet your host</p>
          <h2>Jacob Paulaner</h2>
        </section>
        <p>
          Jacob has a background in audio engineering, and has <br /> been
          podcasting since the early days.
        </p>
        <p>
          He’s here to help you level up your game by sharing <br /> everything
          he’s learned along the way.
        </p>
      </section>
      <img src={jacob} alt="" />
    </section>
  );
};
