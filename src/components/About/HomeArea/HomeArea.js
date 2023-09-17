import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./HomeArea.module.css";

// import images
import Fifteen from "../../../images/15.jpg";

const HomeArea = () => {
  return (
    <Fragment>
      <section className={classes.areaHomeStyle2}>
        <Container>
          <Row>
            <Col xs={12} lg={5}>
              <div className={classes["video-area"]}>
                <Image src={Fifteen} alt="video" fluid={true} />
                <div className={classes["video-play-area"]}>
                  <Link
                    to="https://youtu.be/p8iojxGUfdE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={{ span: 6, offset: 1 }}>
              <div className={classes["area-org"]}>
                <h4 className={classes["about-us"]}>about us</h4>
                <h1>
                  Khairah is <span>Nonprofit</span> Organization{" "}
                  <span>For Help</span> Children.
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by thethe readable content off a page when looking at its
                  layout point using Lorem Ipsum is that it has.
                </p>
                <ul className={`list-inline`}>
                  <li className={`list-inline-item`}>
                    <Link to={void 0}>
                      Save <br />
                      Children.
                    </Link>
                  </li>
                  <li className={`list-inline-item`}>
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

export default HomeArea;
