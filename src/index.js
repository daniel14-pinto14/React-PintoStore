import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

import TodoList from "./TodoList";

function BookList() {
  return (
    <>
      <h1>Pinto Book Store</h1>
      <section className="booklist">
        {books.map((book, number) => {
          return <Book {...book} key={book.id} number={book.index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
