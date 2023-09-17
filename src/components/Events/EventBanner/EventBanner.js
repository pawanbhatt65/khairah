import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./EventBanner.module.css";

const EventBanner = () => {
  return (
    <Fragment>
      <section className={classes.aboutEveryOne}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={classes["know-about"]}>
                <h1>Our Events</h1>
                <p>
                  <Link href="/">home</Link>
                  <span className={classes["about-link"]}>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  <span>events</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default EventBanner;
