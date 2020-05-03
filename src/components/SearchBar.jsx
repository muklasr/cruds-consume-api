import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component{
  state = {
    value: ''
  }

  handleFormChange = (event) => {
    const val = event.target.value;
    this.setState({ value: val });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  };

  render() {
    return (
      <div id="search-container" className="search-container">
        <input
          placeholder="Cari wayang"
          id="searchElement"
          type="search"
          onChange={this.handleFormChange}
        />
        <button id="searchButtonElement" onClick={this.handleSubmit}>
          Cari
        </button>
      </div>
    );
  }
}

export default SearchBar;
