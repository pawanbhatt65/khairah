import React, { Fragment } from "react";
import EventBanner from "../components/Events/EventBanner/EventBanner";
import UpcomingEvent from "../components/Events/UpcomingEvent/UpcomingEvent";

const EventPage = () => {
  return (
    <Fragment>
      <EventBanner />
      <UpcomingEvent />
    </Fragment>
  );
};

export default EventPage;
