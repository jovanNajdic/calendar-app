import React from "react";

const MonthSelect = ({ onClick, currentMonth, currentYear }) => (
  <div className="row">
    <div className="month__select">
      <button className="button button--prev" onClick={() => onClick(-1)}>
        <i className="fa fa-caret-left" aria-hidden="true" />
      </button>
      <span>
        {currentMonth} {currentYear}
      </span>
      <button className="button button--next" onClick={() => onClick(1)}>
        <i className="fa fa-caret-right" aria-hidden="true" />
      </button>
    </div>
  </div>
);

export default MonthSelect;
