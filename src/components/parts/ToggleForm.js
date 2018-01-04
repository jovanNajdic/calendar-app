import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent, editEvent } from "../../actions/event";
import { closeForm } from "../../actions/eventForm";
import EditEvent from "../forms/EditEvent";
import AddEvent from "../forms/AddEvent";

class ToggleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos:
        {
          top: props.pos.top,
          left: props.pos.left,
          arrow: false
        } || {}
    };
  }

  componentWillMount() {
    if (window) {
      if (window.innerWidth - this.state.pos.left < 300) {
        this.setState({
          ...this.state,
          pos: {
            ...this.state.pos,
            left: this.state.pos.left - 200,
            top: this.state.pos.top + 120,
            arrow: true
          }
        });
      }
    }
  }

  render() {
    const { pos } = this.state;
    const { event, selectedDate } = this.props;
    const one = event[0];
    return one ? (
      <EditEvent
        pos={pos}
        event={event}
        closeForm={() => this.props.closeForm()}
        editEvent={data => this.props.editEvent(data)}
      />
    ) : (
      <AddEvent
        pos={pos}
        selectedDate={selectedDate}
        addEvent={data => this.props.addEvent(data)}
        closeForm={() => this.props.closeForm()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.eventForm.open,
    event: state.events.filter(
      event => event.date === state.month.date.activeDay
    ),
    pos: state.eventForm.pos,
    selectedDate: state.month.date.activeDay
  };
}

export default connect(mapStateToProps, { closeForm, addEvent, editEvent })(
  ToggleForm
);
