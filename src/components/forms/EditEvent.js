import React, { Component } from "react";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        description: props.event[0].data.description || ""
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
    this.props.editEvent(this.state.data);
  };

  render() {
    const { pos } = this.props;

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
          <h3>{this.props.event[0].data.title}</h3>
        </div>
        <div className="form__group">
          <h3>{this.props.event[0].date}</h3>
        </div>
        <div className="form__group">
          <h3>{this.props.event[0].data.user}</h3>
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
            Update
          </button>
        </div>
      </form>
    );
  }
}

export default EditEvent;
