import React, { useEffect } from "react";
import useScrollPosition from "./hooks/useScrollPosition";

export default function Contact() {
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
    const el = document.querySelectorAll(".contact h1");

    if (scrollPosition + window.innerHeight === getDocHeight()) {
      el.forEach((item) => item.classList.add("u--bounceIn"));
    } else {
      el.forEach((item) => item.classList.remove("u--bounceIn"));
    }
  }, [scrollPosition]);

  return (
    <section id="contact" className="contact">
      <h1>Let's Create</h1>
      <h1>Something Great</h1>
      <p>
        If you like our work and have some cool project to work on, just send us
        direct message or contact us through social sites listed below.
      </p>
      <button className="btn">GET IN TOUCH</button>
      <ul>
        <li>
          <a href="https://twitter.com/">twitter</a>
        </li>
        <li>
          <a href="https://dribbble.com/">dribble</a>
        </li>
        <li>
          <a href="https://www.behance.net/">behance</a>
        </li>
        <li>
          <a href="https://www.facebook.com/">facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">instagram</a>
        </li>
      </ul>
    </section>
  );
}
