import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Book title={book.title} author={book.author} year={book.year} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
