import React, { Fragment } from "react";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <div className={classes.scrollToTop} onClick={scrollToTopHandler}>
        <i className="fas fa-angle-double-up"></i>
      </div>
    </Fragment>
  );
};

export default ScrollToTop;
