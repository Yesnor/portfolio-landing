import React, { useState, useEffect } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import logo from "../img/logo.png";
export default function Header() {
  const scrollPosition = useScrollPosition();
  useEffect(() => {}, [scrollPosition]);

  return (
    <header className={scrollPosition > 100 ? "red-nav" : ""}>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav className="">
        <ul className="">
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
