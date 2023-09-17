import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* header topbar start   */}
        <div className={classes.topbar}>
          <Container fluid="xxl" className={classes.containerBox}>
            <Row className={classes.rowBox}>
              <Col xs={12} md={6} className={classes.colBoxOne}>
                <div className={classes["head-location"]}>
                  <h3>
                    <i className="fas fa-map-marker-alt"></i> 27 Division St,
                    New York, NY 10002
                  </h3>
                </div>
              </Col>
              <Col xs={12} md={6} className={classes.colBoxTwo}>
                <div className={classes["head-media"]}>
                  <ul className={`list-inline`}>
                    <li className="list-inline-item">
                      <Link to={void 0}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={void 0}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={void 0}>
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={void 0}>
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* header topbar end   */}
      </header>
    </Fragment>
  );
};

export default Header;
