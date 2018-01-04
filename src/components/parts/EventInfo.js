import React from "react";

const EventInfo = ({ event }) => (
  <div>
    <h3>{event.data.title}</h3>
    <h4>{event.data.user}</h4>
    <p>{event.data.description}</p>
  </div>
);

export default EventInfo;
