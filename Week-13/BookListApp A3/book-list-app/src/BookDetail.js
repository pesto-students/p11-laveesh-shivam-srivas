import React, { Component } from "react";

class BookDetail extends Component {
  state = {
    showDetails: false,
  };

  toggleDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { title, author, year } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="book-detail">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <button onClick={this.toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && (
          <div className="additional-details">
            {/* Additional details content */}
          </div>
        )}
      </div>
    );
  }
}

export default BookDetail;
