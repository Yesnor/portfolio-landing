import React, { useState, useEffect } from "react";
// import work from "../img/nurse2-work.jpg";
// import life from "../img/nurse2-life.jpg";

import sea from "../img/sea.jpg";
import beach from "../img/beach.jpg";
import { DraggableCore } from "react-draggable";

export default function Curtain() {
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(50);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLeft((prev) => (prev = 50));
    });
    // eslint-disable-next-line
  }, []);

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
            <span className="material-icons">code</span>
          </div>
        </div>
      </DraggableCore>
      <div
        className="sea"
        style={{ clipPath: `polygon(0 0, ${left}% 0, ${left}% 100%, 0% 100%)` }}
      >
        <img src={sea} alt="" />
      </div>
      <div className="beach">
        <img src={beach} alt="" />
      </div>
    </div>
  );
}
