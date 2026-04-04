import guy from "../assets/images/hero/guy.png";
import next from "../assets/images/hero/next.svg";
import spotify from "../assets/images/hero/listen-on/spotify.svg";
import soundcloud from "../assets/images/hero/listen-on/soundcloud.svg";
import overcasts from "../assets/images/hero/listen-on/overcasts.svg";
import pocketCasts from "../assets/images/hero/listen-on/pocket-casts.svg";
import applePodcasts from "../assets/images/hero/listen-on/apple-podcasts.svg";

import "./styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <img src={guy} alt="" />

      <section className="hero-body">
        <h2 className="hero-heading">
          Take your <br />
          podcast to the <br />
          <img src={next} alt="" /> <span className="level">level</span>
        </h2>
        <section className="listen-on">
          <h3 className="listen-on-heading">Listen on</h3>
          <div className="music-platforms">
            <img src={spotify} alt="" />
            <img src={pocketCasts} alt="" />
            <img src={soundcloud} alt="" />
            <img src={applePodcasts} alt="" />
            <img src={overcasts} alt="" />
          </div>
        </section>
      </section>
    </section>
  );
};
