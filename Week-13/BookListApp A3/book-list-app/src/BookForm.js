import React, { Component } from "react";

class BookForm extends Component {
  state = {
    title: "",
    author: "",
    year: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, year } = this.state;
    const newBook = { title, author, year };
    this.props.addBook(newBook);
    this.setState({ title: "", author: "", year: "" });
  };

  render() {
    return (
      <div className="book-form container">
        <h2>Add New Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="number"
              className="form-control"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
