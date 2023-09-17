import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./Comment.module.css";
import CommentSlider from "./CommentSlider";
import { CommentSliderItem } from "./CommentSliderItem";

// import images
import ImageThree from "../../../images/img-3 (1).png";
import ImageFour from "../../../images/ts.png";

const Comment = () => {
  return (
    <Fragment>
      <section className={classes.comment}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={classes.testimonial}>
                <CommentSlider slides={CommentSliderItem} />
              </div>
            </Col>
          </Row>
        </Container>
        <div className={classes["testimonial-shape-1"]}>
          <Image src={ImageThree} alt="" fluid={true} />
        </div>
        <div className={classes["testimonial-shape-2"]}>
          <Image src={ImageFour} alt="" fluid={true} />
        </div>
      </section>
    </Fragment>
  );
};

export default Comment;
