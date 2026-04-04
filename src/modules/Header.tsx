import { Link } from "react-router";

import logo from "../assets/images/header/logo.svg";

import "./styles/header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <Link className="nav-items" to="/">
          Home
        </Link>
        <Link className="nav-items" to="/">
          Episodes
        </Link>
        <Link className="nav-items" to="/">
          About
        </Link>
        <Link className="nav-items" to="/">
          Contact
        </Link>
      </nav>
    </header>
  );
};
