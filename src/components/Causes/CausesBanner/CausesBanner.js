import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./CausesBanner.module.css";

const CausesBanner = () => {
  return (
    <Fragment>
      <section class={classes.aboutEveryOne}>
        <Container>
          <Row>
            <Col xs={12}>
              <div class={classes["know-about"]}>
                <h1>causes</h1>
                <p>
                  <Link to="/">home</Link>
                  <span class={classes["about-link"]}>
                    <i class="fas fa-angle-left"></i>
                  </span>
                  <span>Causes</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CausesBanner;
