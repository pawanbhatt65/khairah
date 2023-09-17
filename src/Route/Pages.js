import React, { Fragment } from "react";
import Donate from "../components/Pages/Donate/DonateBanner/Donate";
import MakeDonation from "../components/Pages/Donate/MakeDonation/MakeDonation";

const Pages = () => {
  return (
    <Fragment>
      <Donate />
      <MakeDonation />
    </Fragment>
  );
};

export default Pages;
