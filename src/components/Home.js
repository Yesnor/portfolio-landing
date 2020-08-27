import React from "react";

export default function Home() {
  return (
    <section className="home">
      <div className="home-shadow"></div>
      <h1 className={"home__title"}>Micro Craft</h1>
      <h4 className={"home__desc"}>
        Custom and neat webdesign & front‑end development focused on crafting
        clean & user‑friendly experiences.
      </h4>
      <button href="#" className={"home__btn"}>
        CHECK OUR WORK
      </button>
    </section>
  );
}
