import React, { useEffect, useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";

export default function Home() {
  const [hide, setHide] = useState(false);

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  useEffect(() => {}, [scrollPosition]);
  return (
    <section className="home">
      <div className="home-shadow"></div>
      <h1
        className={
          scrollPosition >= 200 ? "home__title invisible" : "home__title"
        }
      >
        PAVEL HUZA
      </h1>
      <h4
        className={
          scrollPosition >= 300 ? "home__desc invisible" : "home__desc"
        }
      >
        I'm a Czech Republic based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences.
      </h4>
      <button
        href="#"
        className={scrollPosition >= 350 ? "home__btn invisible" : "home__btn"}
      >
        CHECK MY WORK
      </button>
    </section>
  );
}
