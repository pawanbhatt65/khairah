import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Wait.module.css";

// import images
import ShapeOne from "../../../images/shape.png";
import { Link } from "react-router-dom";

const Wait = () => {
  const [wait, setWait] = useState(true);
  const [some, setSome] = useState(false);
  const [food, setFood] = useState(false);

  const goToSlideOne = (event) => {
    event.preventDefault();
    setWait(true);
    setSome(false);
    setFood(false);
  };

  const goToSlideTwo = (event) => {
    event.preventDefault();
    setWait(false);
    setSome(true);
    setFood(false);
  };

  const goToSlideThree = (event) => {
    event.preventDefault();
    setWait(false);
    setSome(false);
    setFood(true);
  };

  return (
    <Fragment>
      <section className={classes.wait}>
        {wait ? (
          <div className={`${classes.slider} ${classes.active}`}>
            <Container className={classes.containerBox}>
              <Row className={classes.rowBox}>
                <Col xs={12} md={8} className={classes.colBox}>
                  <div className={classes["wait-food"]}>
                    <h4 className={classes["wait-food-comment"]}>
                      go fore help
                    </h4>
                    <h1 className={classes["wait-children"]}>
                      They Are Wait For Some Food.
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted the readable content of a page when looking at
                      its layout point of using of letters, as opposed.
                    </p>
                    <Link to={void 0}>
                      Donate Now <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className={classes["slider-slide"]}>
              <img src={ShapeOne} alt="box images" className="img-fluid" />
            </div>
          </div>
        ) : null}
        {some ? (
          <div className={`${classes.slider} ${classes.active}`}>
            <Container className={classes.containerBox}>
              <Row className={classes.rowBox}>
                <Col xs={12} md={8} className={classes.colBox}>
                  <div className={classes["wait-food"]}>
                    <h4 className={classes["wait-food-comment"]}>
                      go fore help
                    </h4>
                    <h1 className={classes["wait-children"]}>
                      They Are Wait For Some Food.
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted the readable content of a page when looking at
                      its layout point of using of letters, as opposed.
                    </p>
                    <Link to={void 0}>
                      Donate Now <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className={classes["slider-slide"]}>
              <img src={ShapeOne} alt="box images" className="img-fluid" />
            </div>
          </div>
        ) : null}
        {food ? (
          <div className={`${classes.slider} ${classes.active}`}>
            <Container className={classes.containerBox}>
              <Row className={classes.rowBox}>
                <Col xs={12} md={8} className={classes.colBox}>
                  <div className={classes["wait-food"]}>
                    <h4 className={classes["wait-food-comment"]}>
                      go fore help
                    </h4>
                    <h1 className={classes["wait-children"]}>
                      They Are Wait For Some Food.
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted the readable content of a page when looking at
                      its layout point of using of letters, as opposed.
                    </p>
                    <Link to={void 0}>
                      Donate Now <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className={classes["slider-slide"]}>
              <img src={ShapeOne} alt="box images" className="img-fluid" />
            </div>
          </div>
        ) : null}

        <ul className={classes.dots}>
          <li
            className={`${classes.dot} ${classes["dot-active"]}`}
            onClick={goToSlideOne}
          ></li>
          <li className={classes.dot} onClick={goToSlideTwo}></li>
          <li className={classes.dot} onClick={goToSlideThree}></li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Wait;
