import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./Footer.module.css";

// import images
import Logo from "../../../images/logo.png";
import InstagramOne from "../../../images/f-1.jpg";
import InstagramTwo from "../../../images/f-2.jpg";
import InstagramThree from "../../../images/f-3.jpg";
import InstagramFour from "../../../images/f-4.jpg";
import InstagramFive from "../../../images/f-5.jpg";
import InstagramSix from "../../../images/f-6.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes["footer-top"]}>
          <Container>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <div className={classes["footer-media"]}>
                  <h2>
                    <Link to={void 0}>
                      <Image src={Logo} alt="logo footer" fluid={+true} />
                      khai<span>rah.</span>
                    </Link>
                  </h2>
                  <p>
                    Build and Earn with your online store with lots of cool and
                    exclusive tp-features
                  </p>
                  <ul>
                    <li>
                      <Link to={void 0}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className={classes["footer-links"]}>
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <Link to="/aboutus">about us</Link>
                    </li>
                    <li>
                      <Link to="/causes">Our Causes</Link>
                    </li>
                    <li>
                      <Link to={void 0}>Our Volunteer</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/events">Our Event</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className={classes["footer-contact"]}>
                  <h3>Contact</h3>
                  <p>
                    online store with lots of cool and exclusive tp-features
                  </p>
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>{" "}
                      28 Street, New York City, USA
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-phone-volume"></i>
                      </span>{" "}
                      +000123456789
                    </li>
                    <li>
                      <span>
                        <i className="far fa-envelope"></i>
                      </span>{" "}
                      khairah@gmail.com
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className={classes["footer-insta"]}>
                  <h3>instagram</h3>
                  <ul>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramOne}
                          alt="InstagramOne"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramTwo}
                          alt="InstagramTwo"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramThree}
                          alt="InstagramThree"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramFour}
                          alt="InstagramFour"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramFive}
                          alt="InstagramFive"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to={void 0}>
                        <Image
                          src={InstagramSix}
                          alt="InstagramSix"
                          fluid={+true}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={classes["footer-bottom"]}>
          <Container>
            <Row>
              <Col xs={12}>
                <div className={classes["copy-write"]}>
                  <p>© 2020 Khairah. All rights reserved</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
