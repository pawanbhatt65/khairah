import React, { Fragment } from "react";
import classes from "./Partners.module.css";

// import images
import TwentyOne from "../../../images/21.png";
import TwentyTwo from "../../../images/21.png";
import TwentyThree from "../../../images/23.png";
import TwentyFour from "../../../images/24.png";
import TwentyFive from "../../../images/25.png";
import { Col, Container, Image, Row } from "react-bootstrap";

const Partners = () => {
  return (
    <Fragment>
      <section className={classes.partners}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={classes["drag-slider"]}>
                <div className={classes["slider-img"]}>
                  <Image src={TwentyOne} alt="partners One" fluid={true} />
                </div>
                <div className={classes["slider-img"]}>
                  <Image src={TwentyTwo} alt="partners Two" fluid={true} />
                </div>
                <div className={classes["slider-img"]}>
                  <Image src={TwentyThree} alt="partners Three" fluid={true} />
                </div>
                <div className={classes["slider-img"]}>
                  <Image src={TwentyFour} alt="partners Four" fluid={true} />
                </div>
                <div className={classes["slider-img"]}>
                  <Image src={TwentyFive} alt="partners Five" fluid={true} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Partners;
