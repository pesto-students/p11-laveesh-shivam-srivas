import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  render() {
    const { books } = this.props;

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
  }
}

export default BookList;
