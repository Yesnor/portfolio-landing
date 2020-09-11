import React from "react";

export default function Home() {
  return (
    <section className="home">
      <div className="home-shadow"></div>
      <h1 className={"home__title u--fadeInUp"}>Micro Craft</h1>
      <h4 className={"home__desc u--fadeInUp"}>
        Custom and neat webdesign & front‑end development focused on
        user‑friendly experiences.
      </h4>
      <button href="#" className={"home__btn u--fadeInUp"}>
        CHECK OUR WORK
      </button>
    </section>
  );
}
