import React, { Component } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import './styles.css';


class App extends Component {
  state = {
    books: [
      { title: 'Book 1', author: 'Author 1', year: 2020 },
      { title: 'Book 2', author: 'Author 2', year: 2018 },
      { title: 'Book 3', author: 'Author 3', year: 2022 },

    ],
  };

  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  updateBooks = (updatedBooks) => {
    this.setState({ books: updatedBooks });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <BookForm addBook={this.addBook} />
        <BookList books={books} updateBooks={this.updateBooks} />
      </div>
    );
  }
}

export default App;