import React from "react";

const EventList = ({ events, filterData }) => (
  <div className="events">
    {events
      .filter(
        event =>
          event.data.title.toLowerCase().indexOf(filterData.toLowerCase()) >
            -1 ||
          event.data.user.toLowerCase().indexOf(filterData.toLowerCase()) >
            -1 ||
          event.date.toLowerCase().indexOf(filterData.toLowerCase()) > -1
      )
      .map((filtered, i) => (
        <div className="event event--filtered" key={`filtered.data.user-${i}`}>
          <h3>{filtered.data.title}</h3>
          <h5 style={{ fontWeight: 300, fontStyle: "italic" }}>
            {filtered.date}
          </h5>
        </div>
      ))}
  </div>
);

export default EventList;
