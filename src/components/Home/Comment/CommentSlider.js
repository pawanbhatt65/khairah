import React, { Fragment, useState } from "react";
import { Image } from "react-bootstrap";
import classes from "./Comment.module.css";
import { CommentSliderItem } from "./CommentSliderItem";

const CommentSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSliderTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSliderTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Fragment>
      {CommentSliderItem.map((item, index) => {
        return (
          <div
            className={
              index === current
                ? "testimonial-slider text-center active-slider"
                : "testimonial-slider text-center"
            }
            key={index}
          >
            <div className={classes["join-person"]}>
              <Image src={item.images} alt="" fluid={true} />
            </div>
            <div className={classes["person-query"]}>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="far fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="far fa-star"></i>
                </li>
              </ul>
              <p>{item.text}</p>
              <div className={classes["info"]}>
                <h5>{item.name}</h5>
                <p>{item.volun}</p>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className={`${classes["testimonial-arrow"]} ${classes["testimonial-next"]}`}
        onClick={nextSliderTestimonial}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
      <button
        className={`${classes["testimonial-arrow"]} ${classes["testimonial-prev"]}`}
        onClick={prevSliderTestimonial}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    </Fragment>
  );
};

export default CommentSlider;
