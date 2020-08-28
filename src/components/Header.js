import React, { useEffect } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import logo from "../img/logo.png";

export default function Header() {
  const scrollPosition = useScrollPosition();

  function getDocHeight() {
    const D = document;
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    );
  }
  useEffect(() => {
    if (scrollPosition + window.innerHeight === getDocHeight()) {
      // do some stuff
    }
  }, [scrollPosition]);

  return (
    <header className={scrollPosition > 100 ? "red-nav" : ""}>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
