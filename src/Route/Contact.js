import React, { Fragment } from "react";
import ContactBanner from "../components/Contact/ContactBanner/ContactBanner";
import OurContact from "../components/Contact/OurContact/OurContact";

const ContactPage = () => {
  return (
    <Fragment>
      <ContactBanner />
      <OurContact />
    </Fragment>
  );
};

export default ContactPage;
