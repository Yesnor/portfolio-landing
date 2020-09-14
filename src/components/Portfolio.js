import React from "react";
import img1 from "../img/1.jpg";
import img3 from "../img/3.jpg";
import img2 from "../img/2.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__text">
        {" "}
        <h1>Portfolio</h1>
        <p>
          Below you can see some projects we've been working on lately. We
          divide each project into four follow-up areas: comprehensive research,
          wireframing, design & development. This process allows us to create
          great product with client goals in mind.
        </p>
      </div>
      <div>
        <div className="portfolio__item item-even">
          <div className="portfolio__item--image">
            <img src={img6} alt="" />
          </div>
          <div className="portfolio__item--aside">
            <h3>Cars & Bids</h3>
            <p>
              An online car auction marketplace to buy and sell modern
              enthusiast cars
            </p>
            <p>Cars & Bids offers significant advantages over other websites</p>

            <a href="https://cars-and-bids757.netlify.app/" className="btn">
              MORE AT THIS LINK
            </a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item--aside ">
            <h3>Currency converter</h3>
            <p>
              Simple and robust currency converter based on current values from
              around the world.
            </p>
            <p>Calculate live currency and foreign exchange rates.</p>
            <a
              href="https://currency-converter757.netlify.app/"
              className="btn"
            >
              MORE AT THIS LINK
            </a>
          </div>
          <div className="portfolio__item--image ">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="portfolio__item item-even">
          <div className="portfolio__item--image">
            <img src={img3} alt="" />
          </div>
          <div className="portfolio__item--aside">
            <h3>Weather forecast</h3>
            <p>Local, National & Global Daily Weather Forecast</p>
            <p>The most accurate weather forecasting technology.</p>

            <a href="https://weather-app757.netlify.app/" className="btn">
              MORE AT THIS LINK
            </a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item--aside">
            <h3>Memory Pair game</h3>
            <p>Find pairs of images under the following tiles.</p>
            <p>
              Playing is very simple - you turn over one tile and then try to
              find a matching tile.
            </p>

            <a href="https://memory-game757.netlify.app/" className="btn">
              MORE AT THIS LINK
            </a>
          </div>
          <div className="portfolio__item--image">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="portfolio__item item-even ">
          <div className="portfolio__item--image">
            <img src={img4} alt="" />
          </div>
          <div className="portfolio__item--aside">
            <h3>Labyrinth game</h3>
            <p>Have fun while playing this simple labyrinth game</p>

            <a href="https://labyrinth-react757.netlify.app/" className="btn">
              MORE AT THIS LINK
            </a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item--aside">
            <h3>Skyline Hotel</h3>
            <p>You can find here a decent hotel website</p>

            <a href="https://skyline-hotel.netlify.app/" className="btn">
              MORE AT THIS LINK
            </a>
          </div>
          <div className="portfolio__item--image">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
