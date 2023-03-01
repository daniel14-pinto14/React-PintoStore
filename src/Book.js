import React from "react";

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
      <span className="number">{props.index + 1} </span>
    </article>
  );
};

export default Book;
