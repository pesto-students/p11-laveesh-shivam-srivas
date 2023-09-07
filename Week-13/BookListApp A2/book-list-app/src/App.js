import React from 'react';
import BookList from './BookList';
import WithLogging from './WithLogging';

const EnhancedBookList = WithLogging(BookList);

const App = () => {
  // Same book array as before
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];

  return (
    <div className="app">
      <EnhancedBookList books={books} />
    </div>
  );
};

export default App;

