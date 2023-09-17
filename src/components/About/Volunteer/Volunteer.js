import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Volunteer.module.css";

// import images
import ImageOne from "../../../images/1 (2).png";
import ImageTwo from "../../../images/2 (2).png";
import ImageThree from "../../../images/3.png";
import ImageFour from "../../../images/4.png";

const Volunteer = () => {
  return (
    <Fragment>
      <section className={classes.volunteer}>
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <div className={classes["great-volunteer"]}>
                <h4>volunteer</h4>
                <h1>Our Great Volunteer</h1>
                <p>
                  It is a long established fact that reader distracted by the
                  the readable content off page looking at its layout point.
                </p>
              </div>
            </Col>
            <Col className="col-lg-3"></Col>
            <Col xs={12} md={6} lg={3}>
              <div className={classes["volunteer-person"]}>
                <div className={classes["volunteer-img"]}>
                  <Image
                    src={ImageOne}
                    alt="volunteer person one"
                    fluid={true}
                  />
                </div>
                <div className={classes["volunteer-content"]}>
                  <h2>
                    <Link to={void 0}>Adriane Newby</Link>
                  </h2>
                  <p>volunteer</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className={classes["volunteer-person"]}>
                <div className={classes["volunteer-img"]}>
                  <Image
                    src={ImageTwo}
                    alt="volunteer person two"
                    fluid={true}
                  />
                </div>
                <div className={classes["volunteer-content"]}>
                  <h2>
                    <Link to={void 0}>Allene Castaneda</Link>
                  </h2>
                  <p>volunteer</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className={classes["volunteer-person"]}>
                <div className={classes["volunteer-img"]}>
                  <Image
                    src={ImageThree}
                    alt="volunteer person three"
                    fluid={true}
                  />
                </div>
                <div className={classes["volunteer-content"]}>
                  <h2>
                    <Link to={void 0}>Malinda Willoughby</Link>
                  </h2>
                  <p>volunteer</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className={classes["volunteer-person"]}>
                <div className={classes["volunteer-img"]}>
                  <Image
                    src={ImageFour}
                    alt="volunteer person four"
                    fluid={true}
                  />
                </div>
                <div className={classes["volunteer-content"]}>
                  <h2>
                    <Link to={void 0}>Wilburn Hatfield</Link>
                  </h2>
                  <p>volunteer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Volunteer;
