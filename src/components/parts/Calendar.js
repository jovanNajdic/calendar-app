import React from "react";
import { connect } from "react-redux";
import { monthChange } from "../../actions/month";
import MonthSelect from "./MonthSelect";
import CalendarBody from "./CalendarBody";

const Calendar = ({ monthChange, currentMonth, currentYear }) => (
  <div className="container">
    <MonthSelect
      onClick={i => monthChange(i)}
      currentMonth={currentMonth}
      currentYear={currentYear}
    />
    <CalendarBody />
  </div>
);

function mapStateToProps(state) {
  return {
    currentMonth: state.month.currentMonth.activeMonth,
    currentYear: state.month.currentMonth.activeYear
  };
}

export default connect(mapStateToProps, { monthChange })(Calendar);
