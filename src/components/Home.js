import React, { useEffect, useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";

export default function Home() {
  // const scrollPosition = useScrollPosition();
  const scrollPosition = 100;
  // useEffect(() => {}, [scrollPosition]);
  return (
    <section className="home">
      <div className="home-shadow"></div>
      <h1
        className={
          scrollPosition >= 200 ? "home__title invisible" : "home__title"
        }
      >
        Micro Craft
      </h1>
      <h4
        className={
          scrollPosition >= 300 ? "home__desc invisible" : "home__desc"
        }
      >
        Custom and neat webdesign & front‑end development focused on crafting
        clean & user‑friendly experiences.
      </h4>
      <button
        href="#"
        className={scrollPosition >= 350 ? "home__btn invisible" : "home__btn"}
      >
        CHECK OUR WORK
      </button>
    </section>
  );
}
