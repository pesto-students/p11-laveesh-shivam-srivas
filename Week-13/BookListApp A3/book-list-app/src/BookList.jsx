import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  handleDelete = (index) => {
    const { books, updateBooks } = this.props;
    const updatedBooks = books.filter((_, i) => i !== index);
    updateBooks(updatedBooks);
  };

  render() {
    const { books } = this.props;

    return (
      <div className="book-list">
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  onDelete={() => this.handleDelete(index)} // Pass the index to handleDelete
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BookList;
