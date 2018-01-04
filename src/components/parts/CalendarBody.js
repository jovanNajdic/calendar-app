import React from "react";
import { connect } from "react-redux";
import { selectDay } from "../../actions/month";
import Day from "./Day";

const CalendarBody = ({
  weekdays,
  days,
  currentMonth,
  events,
  activeDay,
  selectDay
}) => (
  <div className="calendar__body">
    <div className="calendar__body__week">
      <div className="row row--align-center">
        {weekdays.map(day => (
          <span className="day" key={day}>
            {day}
          </span>
        ))}
      </div>
    </div>
    <div className="row row--align-center row--wrap">
      {days.map(day => (
        <Day
          key={day.data.full}
          day={day}
          events={events}
          activeDay={activeDay}
          currentMonth={currentMonth}
          onDayClick={pos => selectDay(day.data.date, pos)}
        />
      ))}
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    weekdays: state.weekdays,
    days: state.month.days,
    currentMonth: state.month.currentMonth,
    events: state.events,
    activeDay: state.month.date.activeDay
  };
}

export default connect(mapStateToProps, { selectDay })(CalendarBody);
