import { Header } from "./modules/Header";
import { Hero } from "./modules/Hero";

import "./reset.css";
import "./global.css";
import { LatestEpisodes } from "./modules/LatestEpisodes";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LatestEpisodes />
    </div>
  );
};
