import React, { Fragment } from "react";
import AboutBanner from "../components/About/AboutBanner/AboutBanner";
import HomeArea from "../components/About/HomeArea/HomeArea";
import Volunteer from "../components/About/Volunteer/Volunteer";
import Comment from "../components/Home/Comment/Comment";
import FeatureArea from "../components/Home/FeatureArea/FeatureArea";
import Partners from "../components/Home/Partners/Partners";

const AboutPage = () => {
  return (
    <Fragment>
      <AboutBanner />
      <HomeArea />
      <FeatureArea />
      <Volunteer />
      <Comment />
      <Partners />
    </Fragment>
  );
};

export default AboutPage;
