import React, { Fragment } from "react";
import Volunteer from "../components/About/Volunteer/Volunteer";
import UpcomingEvent from "../components/Events/UpcomingEvent/UpcomingEvent";
import Area from "../components/Home/Area/Area";
import Causes from "../components/Home/Causes/Causes";
import Comment from "../components/Home/Comment/Comment";
import FeatureArea from "../components/Home/FeatureArea/FeatureArea";
import LatestNews from "../components/Home/LatestNews/LatestNews";
import Partners from "../components/Home/Partners/Partners";
import Wait from "../components/Home/Wait/Wait";

const Home = () => {
  return (
    <Fragment>
      <Wait />
      <Area />
      <FeatureArea />
      <Causes />
      <UpcomingEvent />
      <Volunteer />
      <Comment />
      <LatestNews />
      <Partners />
    </Fragment>
  );
};

export default Home;
