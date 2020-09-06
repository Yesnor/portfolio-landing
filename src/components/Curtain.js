import React, { useState, useEffect } from "react";
import work from "../img/nurse2-work.jpg";
import life from "../img/nurse2-life.jpg";
import { DraggableCore } from "react-draggable";

export default function Curtain() {
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(50);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLeft((prev) => (prev = 50));
    });
    const el = document.querySelector(".curtain");

    if (drag) el.classList.add("curtain-drag");
    else el.classList.remove("curtain-drag");
    // eslint-disable-next-line
  }, [drag]);

  return (
    <div className="curtain">
      <DraggableCore
        onDrag={(e) => {
          setDrag(true);
          if (drag) setLeft((e.clientX / window.innerWidth) * 100);
        }}
        onStop={() => {
          setDrag(false);
        }}
      >
        <div className="curtain-bar" style={{ left: `${left}%` }}>
          <div className="handle">
            <span class="material-icons">code</span>
          </div>
        </div>
      </DraggableCore>
      <div
        className="work-left"
        style={{ clipPath: `polygon(0 0, ${left}% 0, ${left}% 100%, 0% 100%)` }}
      >
        <img src={work} alt="" />
      </div>
      <div className="life-right">
        <img src={life} alt="" />
      </div>
    </div>
  );
}

/*


*/

/* 
import React, { useState, useEffect, useRef } from "react";
import work from "./img/nurse2-work.jpg";
import life from "./img/nurse2-life.jpg";
import useResize from "./useResize";

export default function Curtain() {
  const [left, setLeft] = useState(
    Math.trunc((window.innerWidth / 2 / window.innerWidth) * 100)
  );
  const middle = useResize() || window.innerWidth / 2;
  // const middle = window.innerWidth / 2;
  const [middleBar, setMiddleBar] = useState(middle);

  const [mouse, setMouse] = useState(null);
  useEffect(() => {}, [mouse, left, middle]);

  useEffect(() => {
    const el = document.querySelector(".curtain-bar");
    const pos = el.getBoundingClientRect();
    const posX = pos.x;
    console.log("posX: ", posX);
  }, []);
  return (
    <div className="curtain">
      <div
        style={{ left: middleBar }}
        draggable="true"
        className="curtain-bar"
        onDrag={(e) => {
          // setLeft((prev) => (prev = window.innerWidth / 2));
          setLeft((e.clientX / window.innerWidth) * 100);
          console.log("it was dragged");
          console.log(window.innerWidth);
        }}
        onDragStart={(e) => {
          let el = document.querySelector(".bar");
          el.classList.add("d-none");
        }}
        onDragover={(e) => {
          let el = document.querySelector(".bar");
          el.classList.remove("d-none");
        }}
        onDragEnd={(e) => {
          // setLeft((prev) => (prev = window.innerWidth / 2));
          let el = document.querySelector(".bar");
          el.classList.remove("d-none");
          setMiddleBar(left);
          console.log("dragged end", e);
          console.log(window.innerWidth);
        }}
        onDrop={(e) => {
          // setLeft((prev) => (prev = window.innerWidth / 2));
          // e.preventDefault();
          // const data = e.dataTransfer.getData("text/plain");
          // e.target.textContent = data;
          e.preventDefault();
          let el = document.querySelector(".bar");
          el.classList.remove("d-none");
          setMiddleBar(left);
        }}
      >
        <div className="bar"></div>
      </div>
      <div
        className="work-left"
        style={{ clipPath: `polygon(0 0, ${left}% 0, ${left}% 100%, 0% 100%)` }}
      >
        <img src={work} alt="" />
      </div>
      <div className="life-right">
        {" "}
        <img src={life} alt="" />
      </div>
    </div>
  );
}


*/
