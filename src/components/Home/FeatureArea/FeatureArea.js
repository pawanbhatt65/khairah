import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../UI/Button";
import classes from "./FeatureArea.module.css";

// import images
import ImageOne from "../../../images/img-1.png";
import ImageTwo from "../../../images/img-2.png";
import ImageThree from "../../../images/img-3.png";
import ImageFour from "../../../images/img-4.png";
import { Link } from "react-router-dom";

const FeatureArea = () => {
  return (
    <Fragment>
      <section className={classes["features-area"]}>
        <Container>
          <Row>
            <Col xs={12} lg={5}>
              <div className={classes["features-journey"]}>
                <h4 className={classes["features"]}>features</h4>
                <h1>
                  The great journey to end poverty for good begins with a child.
                </h1>
                <p>
                  It is a long established fact that reader distracted by the
                  the readable content off page looking at its layout point that
                  it has.
                </p>
                <Button className={classes["btn-donate"]}>donate now</Button>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className={classes["features-box"]}>
                <div className={classes["features-treatment"]}>
                  <div>
                    <img
                      src={ImageOne}
                      alt="cancer treatment"
                      className="img-fluid"
                    />
                  </div>
                  <h2>
                    <Link to={void 0}>cancer treatment</Link>
                  </h2>
                </div>
                <div className={classes["features-treatment"]}>
                  <div>
                    <img
                      src={ImageTwo}
                      alt="Hospital building"
                      className="img-fluid"
                    />
                  </div>
                  <h2>
                    <Link to={void 0}>Hospital Build</Link>
                  </h2>
                </div>
                <div className={classes["features-treatment"]}>
                  <div>
                    <img
                      src={ImageThree}
                      alt="Enviorment recyling"
                      className="img-fluid"
                    />
                  </div>
                  <h2>
                    <Link to={void 0}>enviorment recyle</Link>
                  </h2>
                </div>
                <div className={classes["features-treatment"]}>
                  <div>
                    <img
                      src={ImageFour}
                      alt="Food and Home"
                      className="img-fluid"
                    />
                  </div>
                  <h2>
                    <Link to={void 0}>Food &amp; Build Home</Link>
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default FeatureArea;
