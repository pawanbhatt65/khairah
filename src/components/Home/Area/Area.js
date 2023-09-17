import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Area.module.css";

// import images
import ImgOne from "../../../images/img-1.jpg";
import { Link } from "react-router-dom";

const Area = () => {
  return (
    <Fragment>
      <section class={classes.area}>
        <Container>
          <Row>
            <Col xs={12} lg={5}>
              <div class={classes["about-circle"]}>
                <div class={classes["area-child"]}>
                  <img src={ImgOne} alt="slave children" fluid={true} />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={{ span: 6, offset: 1 }} className={classes.colBox}>
              <div class={classes["area-org"]}>
                <h4 class={classes["about-us"]}>about us</h4>
                <h1>
                  Khairah is <span>Nonprofit</span> Organization{" "}
                  <span>For Help</span> Children.
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by thethe readable content off a page when looking at its
                  layout point using Lorem Ipsum is that it has.
                </p>
                <ul class="list-inline">
                  <li class={`list-inline-item`}>
                    <Link to={void 0}>
                      Save <br />
                      Children.
                    </Link>
                  </li>
                  <li class={`list-inline-item`}>
                    <Link to={void 0}>
                      Fresh And
                      <br />
                      Clean Water.
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Area;
