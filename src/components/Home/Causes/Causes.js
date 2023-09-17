import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../UI/Button";
import classes from "./Causes.module.css";

import { CauseItem } from "./CauseItem";
import { Link } from "react-router-dom";

const Causes = (props) => {
  return (
    <Fragment>
      <section class={classes.causes}>
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <div class={classes["causes-heading"]}>
                <h4>causes</h4>
                <h1>Latest Caused of Khairah.</h1>
                <p>
                  It is a long established fact that reader distracted by the
                  the readable content off page looking at its layout point.
                </p>
              </div>
            </Col>
          </Row>
          <Row class={classes.rowTwo}>
            {CauseItem.map((item) => {
              return (
                <Col xs={12} md={6} xl={4}>
                  <div class={classes["causes-type"]}>
                    <div class={classes["causes-img"]}>
                      <div class={classes.setPosition}>
                        <img
                          src={item.imageOne}
                          alt="child one"
                          fluid={true}
                          class={`d-block mx-auto`}
                        />
                        <div class={classes.blank}>
                          <Button class={classes["btn-blank"]}>
                            dotante now
                            <span>
                              <i class="fas fa-angle-double-right"></i>
                            </span>
                          </Button>
                        </div>
                      </div>
                      <ul class={`list-inline`}>
                        <li class={`list-inline-item`}>
                          <Button className={classes.priceButton}>
                            {item.goal}
                          </Button>
                        </li>
                        <li class={`list-inline-item`}>
                          <Button className={classes.priceButton}>
                            {item.price}
                          </Button>
                        </li>
                      </ul>
                    </div>
                    <div class={classes["cause-discription"]}>
                      <h3>
                        <Link to={void 0}>{item.financial}</Link>
                      </h3>
                      <p>{item.financialReasons}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Causes;
