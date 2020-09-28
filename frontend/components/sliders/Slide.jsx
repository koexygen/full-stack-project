import React from "react";

const Slide = (props) => {
  return (
    <ul className={"slide-container"}>
      <span className="slider-arrow" onClick={props.prevSlide}>
        {"<"}
      </span>

      {props.movies.map((movie, idx) => {
        return (
          <li className="slide-movie" key={idx}>
            {movie.text}
          </li>
        );
      })}

      <span className="slider-arrow" onClick={props.nextSlide}>
        {">"}
      </span>
    </ul>
  );
};

export default Slide;