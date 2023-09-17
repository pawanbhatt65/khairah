import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "../../About/AboutBanner/AboutBanner.module.css";

const ContactBanner = () => {
  return (
    <Fragment>
      <section className={classes.aboutEveryOne}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={classes["know-about"]}>
                <h1>Contact us</h1>
                <p>
                  <Link to="/">home</Link>
                  <span className={classes["about-link"]}>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  <span>Contact</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ContactBanner;
