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

  validate = data => {
    const errors = {};
    const reg = /^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\/(.[^\/]*)\/(.[^\/]*)/;
    if (!reg.test(data)) {
      errors.text = "Example: 22/any string/any string";
    }
    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data.text);
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.data.text);
      this.setState(
        {
          data: {
            text: ""
          }
        },
        () => this.props.closeForm()
      );
    } else {
      this.setState({ errors });
    }
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
