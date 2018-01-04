import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        text: ""
      },
      errors: {}
    };
  }

  onChange = e =>
    this.setState(
      {
        ...this.state,
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      },
      () => this.props.onDataChange(this.state.data.text)
    );

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { text } = this.state.data;
    return (
      <form className="form form--search" onSubmit={this.onSubmit}>
        <div className="form__group">
          <label htmlFor="text" className="form__group__label">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
          <input
            id="text"
            name="text"
            value={text}
            onChange={this.onChange}
            placeholder="Search..."
            className="form__group__input form__group__input--serach"
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
