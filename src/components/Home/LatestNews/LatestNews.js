import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./LatestNews.module.css";

// import images
import ImageEleven from "../../../images/11.jpg";
import ImageTwelve from "../../../images/12.jpg";
import ImageThirteen from "../../../images/13.jpg";
import ImageFourteen from "../../../images/14.jpg";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <Fragment>
      <section className={classes.latestNews}>
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <div className={classes["news-info"]}>
                <h4>blog</h4>
                <h1>Our Latest News</h1>
                <p>
                  It is a long established fact that reader distracted by the
                  the readable content off page looking at its layout point.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["news-content"]}>
                <div className={classes["news-img"]}>
                  <Image src={ImageEleven} alt="ImageEleven" fluid={true} />
                </div>
                <div className={classes["bless-news"]}>
                  <div className={classes["blessing-time"]}>
                    <time datetime="2022-01-01">23 june 2022</time>
                    <ul className={`list-inline`}>
                      <li className={`list-inline-item`}>
                        <i className="fas fa-heart"></i> 56
                      </li>
                      <li className={`list-inline-item`}>
                        <i className="far fa-comments"></i> 78
                      </li>
                    </ul>
                  </div>
                  <h1>
                    <Link to={void 0}>
                      Best and less published their supplier lists.
                    </Link>
                  </h1>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["news-content"]}>
                <div className={classes["bless-news"]}>
                  <div className={classes["blessing-time"]}>
                    <time datetime="2022-01-01">23 june 2022</time>
                    <ul className={`list-inline`}>
                      <li className={`list-inline-item`}>
                        <i className="fas fa-heart"></i> 56
                      </li>
                      <li className={`list-inline-item`}>
                        <i className="far fa-comments"></i> 78
                      </li>
                    </ul>
                  </div>
                  <h1>
                    <Link to={void 0}>
                      Best and less published their supplier lists.
                    </Link>
                  </h1>
                </div>
                <div className={classes["news-img"]}>
                  <Image src={ImageTwelve} alt="" fluid={true} />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["news-content"]}>
                <div className={classes["bless-news"]}>
                  <div className={classes["blessing-time"]}>
                    <time datetime="2022-01-01">23 june 2022</time>
                    <ul className={`list-inline`}>
                      <li className={`list-inline-item`}>
                        <i className="fas fa-heart"></i> 56
                      </li>
                      <li className={`list-inline-item`}>
                        <i className="far fa-comments"></i> 78
                      </li>
                    </ul>
                  </div>
                  <h1>
                    <Link to={void 0}>
                      Best and less published their supplier lists.
                    </Link>
                  </h1>
                </div>
                <div className={classes["news-img"]}>
                  <Image src={ImageThirteen} alt="" fluid={true} />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["news-content"]}>
                <div className={classes["news-img"]}>
                  <Image src={ImageFourteen} alt="" fluid={true} />
                </div>
                <div className={classes["bless-news"]}>
                  <div className={classes["blessing-time"]}>
                    <time datetime="2022-01-01">23 june 2022</time>
                    <ul className={`list-inline`}>
                      <li className={`list-inline-item`}>
                        <i className="fas fa-heart"></i> 56
                      </li>
                      <li className={`list-inline-item`}>
                        <i className="far fa-comments"></i> 78
                      </li>
                    </ul>
                  </div>
                  <h1>
                    <Link to={void 0}>
                      Best and less published their supplier lists.
                    </Link>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LatestNews;
