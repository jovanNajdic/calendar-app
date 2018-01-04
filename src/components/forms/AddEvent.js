import React, { Component } from "react";

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        title: "",
        description: "",
        user: ""
      }
    };
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.addEvent(this.state.data);
  };

  render() {
    const { pos, selectedDate } = this.props;
    return (
      <form
        className={`form form--event form--event-day form--shadow ${
          pos.arrow ? "form--arrow-top" : "form--arrow-left"
        }`}
        onSubmit={this.onSubmit}
        style={{
          top: pos.top,
          left: pos.left + 180
        }}
      >
        <span className="form__close">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={this.props.closeForm}
          />
        </span>
        <div className="form__group">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Insert event title"
            onChange={this.onChange}
            className="form__group__input"
            value={this.state.data.title}
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Task description"
            className="form__group__input"
            value={selectedDate}
            disabled
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            id="user"
            name="user"
            placeholder="User"
            className="form__group__input"
            onChange={this.onChange}
            value={this.state.data.user}
          />
        </div>
        <textarea
          id="description"
          name="description"
          onChange={this.onChange}
          value={this.state.data.description}
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

export default AddEvent;
