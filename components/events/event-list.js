import React from "react";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((events) => (
        <li>
          <EventItem />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
