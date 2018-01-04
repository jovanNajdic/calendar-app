import React, { Component } from "react";
import EventInfo from "./EventInfo";

class Day extends Component {
  hasEvent = () =>
    this.props.events.filter(event => event.date === this.props.day.data.date)
      .length > 0;

  render() {
    const { month, day, date } = this.props.day.data;
    const { activeMonth } = this.props.currentMonth;
    const { events, activeDay } = this.props;

    return (
      <div
        className={`day day--event ${
          month !== activeMonth ? "day--last-month" : ""
        } ${date === activeDay ? "day--active" : ""}`}
        style={{
          background: this.hasEvent() ? "#3498db73" : ""
        }}
        ref={el => (this.dayButton = el)}
        onClick={() =>
          this.props.onDayClick({
            top: this.dayButton.offsetTop,
            left: this.dayButton.offsetLeft,
            isValid: true
          })
        }
      >
        <h4>{day}</h4>
        {events.map(
          (event, i) =>
            event.date === date ? (
              <EventInfo event={event} key={`${event.date.toString()}-${i}`} />
            ) : null
        )}
      </div>
    );
  }
}

export default Day;
