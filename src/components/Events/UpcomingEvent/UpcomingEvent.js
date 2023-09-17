import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./UpcomingEvent.module.css";

// import images
import ImageOne from "../../../images/1.jpg";
import ImageTwo from "../../../images/2.jpg";
import ImageThree from "../../../images/3.jpg";
import ImageFour from "../../../images/1 (1).png";
import ImageFive from "../../../images/2 (1).png";
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  return (
    <Fragment>
      <section className={classes.events}>
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <div className={classes["event-info"]}>
                <h4>events</h4>
                <h1>Our Upcoming Events</h1>
                <p>
                  It is a long established fact that reader distracted by the
                  the readable content off page looking at its layout point.
                </p>
              </div>
            </Col>
            <Col xs={12}>
              <div className={classes["event-items"]}>
                <div className={classes["event-item"]}>
                  <div className={classes["event-img"]}>
                    <Image
                      src={ImageOne}
                      alt="hunger children image"
                      fluid={true}
                    />
                  </div>
                  <div className={classes["event-text"]}>
                    <div className={classes["event-date"]}>
                      <span>mar</span>
                      <h4>28</h4>
                    </div>
                    <div className={classes["event-suffer-child"]}>
                      <ul className={classes["event-location"]}>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 9:00 AM -
                          10:00 AM
                        </li>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 968,
                          Mudkarim, Pakistan.
                        </li>
                      </ul>
                      <h3>
                        <Link to={void 0}>
                          Fundrising event that could change some poor children.
                        </Link>
                      </h3>
                      <p>
                        It is long estblished fact that a reader will be
                        distracted aliquip exea commodo consequat velit esse
                        cillum fugiat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes["event-item"]}>
                  <div className={classes["event-img"]}>
                    <Image
                      src={ImageTwo}
                      alt="hunger children image"
                      fluid={true}
                    />
                  </div>
                  <div className={classes["event-text"]}>
                    <div className={classes["event-date"]}>
                      <span>mar</span>
                      <h4>28</h4>
                    </div>
                    <div className={classes["event-suffer-child"]}>
                      <ul className={classes["event-location"]}>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 9:00 AM -
                          10:00 AM
                        </li>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 968,
                          Mudkarim, Pakistan.
                        </li>
                      </ul>
                      <h3>
                        <Link to={void 0}>
                          Many Children are suffering a lot for food.
                        </Link>
                      </h3>
                      <p>
                        It is long estblished fact that a reader will be
                        distracted aliquip exea commodo consequat velit esse
                        cillum fugiat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes["event-item"]}>
                  <div className={classes["event-img"]}>
                    <Image
                      src={ImageThree}
                      alt="hunger children image"
                      fluid={true}
                    />
                  </div>
                  <div className={classes["event-text"]}>
                    <div className={classes["event-date"]}>
                      <span>mar</span>
                      <h4>28</h4>
                    </div>
                    <div className={classes["event-suffer-child"]}>
                      <ul className={classes["event-location"]}>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 9:00 AM -
                          10:00 AM
                        </li>
                        <li className={`list-inline-item`}>
                          <i className="fas fa-map-marker-alt"></i> 968,
                          Mudkarim, Pakistan.
                        </li>
                      </ul>
                      <h3>
                        <Link to={void 0}>
                          Be kind for the poor people and the kids.
                        </Link>
                      </h3>
                      <p>
                        It is long estblished fact that a reader will be
                        distracted aliquip exea commodo consequat velit esse
                        cillum fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={classes["shape-1"]}>
          <Image src={ImageFour} alt="" fluid={true} />
        </div>
        <div className={classes["shape-2"]}>
          <Image src={ImageFive} alt="" fluid={true} />
        </div>
      </section>
    </Fragment>
  );
};

export default UpcomingEvent;
