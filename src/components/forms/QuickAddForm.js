import React, { Component } from "react";

class QuickAddForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        text: ""
      }
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.data.text);
    this.setState(
      {
        data: {
          text: ""
        }
      },
      () => this.props.closeForm()
    );
  };

  render() {
    return (
      <form
        className="form form--quick-add form--shadow form--arrow-top"
        onSubmit={this.onSubmit}
      >
        <span className="form__close">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={this.props.closeForm}
          />
        </span>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="(01...31)/User/Title"
          onChange={this.onChange}
          value={this.state.data.text}
        />
        <div className="form__buttons">
          <button
            className="form__button form__button--submit"
            onClick={this.onSubmit}
          >
            Add Event
          </button>
        </div>
      </form>
    );
  }
}

export default QuickAddForm;
