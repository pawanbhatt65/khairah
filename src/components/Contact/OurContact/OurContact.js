import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./OurContact.module.css";
import OurContactInput from "./OurContactInput";
import Button from "../../../UI/Button";

const OurContact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const inputs = [
    {
      id: "p1",
      type: "text",
      name: "username",
      className: "form-control",
      errorMessage:
        "User name should be 3-16 characters and shouldn't include any special characters!",
      placeholder: "Name",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "p2",
      type: "email",
      name: "email",
      className: "form-control",
      errorMessage: "It should be valid email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "p3",
      type: "text",
      name: "phone",
      className: "form-control",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special characters.",
      placeholder: "Phone",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "p4",
      type: "text",
      name: "address",
      className: "form-control",
      errorMessage: "Password don't match",
      placeholder: "Address",
      required: true,
      pattern: values.phone,
    },
  ];

  const contactSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onInputChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  console.log(values);

  return (
    <Fragment>
      <section className={classes["our-contact"]}>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className={classes["our-contact-side"]}>
                <div className={classes["our-contact-description"]}>
                  <h2>Our Contact</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                </div>
                <div className={classes["location-phone-email"]}>
                  <div className={classes["icon-img"]}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={classes.info}>
                    <h5>Our Location</h5>
                    <p>245 King Street, Touterie Victoria 8520 Australia</p>
                  </div>
                </div>

                <div className={classes["location-phone-email"]}>
                  <div className={classes["icon-img"]}>
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className={classes.info}>
                    <h5>Phone</h5>
                    <p>0-123-456-7890</p>
                  </div>
                </div>

                <div className={classes["location-phone-email"]}>
                  <div className={classes["icon-img"]}>
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className={classes.info}>
                    <h5>Email</h5>
                    <p>sample@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["quick-contact-form"]}>
                <h2>Quick contact heading</h2>
                <div className={classes["quick-contact-form_form"]}>
                  <form onSubmit={contactSubmitHandler}>
                    <Row>
                      {inputs.map((input) => (
                        <OurContactInput
                          key={input.id}
                          {...input}
                          defaultValue={values[input.name]}
                          onChange={onInputChangeHandler}
                        />
                      ))}
                      <Col xs={12}>
                        <div className={classes["form-name"]}>
                          <textarea
                            name="description"
                            id="description"
                            className="form-control"
                            rows="6"
                          ></textarea>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <Button type="submit" className={classes["submit-btn"]}>
                          submit
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={classes.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13929.360839051611!2d79.50940478872681!3d29.213545993540386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1678728709115!5m2!1sen!2sin"
                  allowFullScreen=""
                  title="This is unique title"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default OurContact;
