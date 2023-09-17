import React, { Fragment } from "react";
import CausesBanner from "../components/Causes/CausesBanner/CausesBanner";
import Causes from "../components/Home/Causes/Causes";

const CausesPage = () => {
  return (
    <Fragment>
      <CausesBanner />
      <Causes />
    </Fragment>
  );
};

export default CausesPage;
