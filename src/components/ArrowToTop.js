import React from "react";
import useScrollPosition from "./hooks/useScrollPosition";

export default function ArrowToTop() {
  const scrollPosition = useScrollPosition();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };
  return (
    <div
      className={scrollPosition > 200 ? "arrow-to-top show" : "arrow-to-top"}
      onClick={scrollToTop}
    >
      <span className="material-icons">arrow_circle_up</span>
    </div>
  );
}
