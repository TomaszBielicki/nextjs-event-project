import Link from "next/link";
import React from "react";

import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const expolreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Link href={expolreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
