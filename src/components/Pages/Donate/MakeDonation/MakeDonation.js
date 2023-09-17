import React, { Fragment } from "react";
import { useState } from "react";
import { Col, Container, Image, Row, Form } from "react-bootstrap";
import Button from "../../../../UI/Button";
import classes from "./MakeDonation.module.css";

// import images
import Visa from "../../../../images/5.png";
import MasterCard from "../../../../images/6.png";
import Skrills from "../../../../images/7.png";
import PayPal from "../../../../images/8.png";

const MakeDonation = () => {
  const [yourDocument, setYourDocument] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [payment, setPayment] = useState("Online");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const yourDocumentChangeHandler = (event) => {
    setYourDocument(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const paymentMethodHandler = (event) => {
    setPayment(event.target.value);
  };

  const cardHolderNameChangeHandler = (event) => {
    setCardHolderName(event.target.value);
    const result = event.target.value.replace(/[^a-z]/gi, "");
    setCardHolderName(result);
  };

  const cardNumberChangeHandler = (event) => {
    setCardNumber(event.target.value.replace(/\D/g, ""));
  };

  const cvvChangeHandler = (event) => {
    setCvv(event.target.value.replace(/\D/g, ""));
  };

  const donationSubmitHandler = (event) => {
    event.preventDefault();

    if (yourDocument.length === 0) {
      alert("document");
      return false;
    } else if (yourDocument.trim().length === 0) {
      alert("enter valid document");
      return false;
    } else if (firstName.length === 0) {
      alert("First Name");
      return false;
    } else if (firstName.trim().length === 0) {
      alert("Enter valid first name");
      return false;
    } else if (lastName.length === 0) {
      alert("Last name");
      return false;
    } else if (lastName.trim().length === 0) {
      alert("enter valid last name");
      return false;
    } else if (email.length === 0) {
      alert("email");
      return false;
    } else if (email.trim().length === 0) {
      alert("Enter valid email");
      return false;
    } else if (address.length === 0) {
      alert("address");
      return false;
    } else if (address.trim().length === 0) {
      alert("valid address");
      return false;
    } else if (message.length === 0) {
      alert("Message");
      return false;
    } else if (message.trim().length === 0) {
      alert("valid message");
      return false;
    } else if (payment === "Online") {
      if (cardHolderName.length === 0) {
        alert("Card Holder Name");
        return false;
      } else if (cardHolderName.trim().length === 0) {
        alert("valid card Holder name");
        return false;
      } else if (cardNumber.length === 0) {
        alert("card number");
        return false;
      } else if (cardNumber.trim().length === 0) {
        alert("enter valid card number");
      } else if (cvv.length === 0) {
        alert("enter cvv");
      } else if (cvv.trim().length === 0) {
        alert("enter valid cvv");
      }
    }
  };

  return (
    <Fragment>
      <section className={classes["donation-fund"]}>
        <Container>
          <Row>
            <Col xs={12} xl={{ span: 8, offset: 2 }}>
              <Form onSubmit={donationSubmitHandler}>
                <div className={classes["fund-raised"]}>
                  <div className={classes["make-donation"]}>
                    <h5>
                      <span>DONATE</span>
                    </h5>
                    <h1>Make a Donation</h1>
                    <div className={classes["donation-amount"]}>
                      <h4>Your Donation</h4>
                      <Form.Control
                        type="text"
                        placeholder="Enter Donation Amount"
                        className={classes["donate-acc"]}
                        onChange={yourDocumentChangeHandler}
                        value={yourDocument}
                      />
                    </div>
                    <div className={classes["donate-detail"]}>
                      <Row>
                        <Col xs={12}>
                          <div className={classes.details}>
                            <h4>Details</h4>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Control
                            type="text"
                            placeholder="First Name"
                            className={classes["first-name"]}
                            onChange={firstNameChangeHandler}
                            value={firstName}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Control
                            type="text"
                            placeholder="Last Name"
                            className={classes["first-name"]}
                            onChange={lastNameChangeHandler}
                            value={lastName}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className={classes["first-name"]}
                            onChange={emailChangeHandler}
                            value={email}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Control
                            type="text"
                            placeholder="Address"
                            className={classes["first-name"]}
                            onChange={addressChangeHandler}
                            value={address}
                          />
                        </Col>
                        <Col xs={12}>
                          <Form.Control
                            as="textarea"
                            rows="10"
                            placeholder="Message"
                            className={classes["first-name"]}
                            onChange={messageChangeHandler}
                            value={message}
                          ></Form.Control>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className={classes["donation-method"]}>
                    <h2>Choose Your Payment Method</h2>
                    <ul className={classes["payment-method"]}>
                      <li>
                        <input
                          type="radio"
                          name="paymentType"
                          id="cardDonation"
                          value="Online"
                          onChange={paymentMethodHandler}
                          checked={payment === "Online"}
                        />
                        <label htmlFor="cardDonation"> Payment By Card</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="paymentType"
                          id="caseDonation"
                          value="Offline"
                          onChange={paymentMethodHandler}
                          checked={payment === "Offline"}
                        />
                        <label htmlFor="caseDonation"> Offline Donation</label>
                      </li>
                    </ul>
                    {payment === "Online" && (
                      <div className={classes["cards-info"]}>
                        <ul className={classes["cards"]}>
                          <li className={classes["visa"]}>
                            <Image src={Visa} alt="visa" fluid={true} />
                          </li>
                          <li className={classes["masterCard"]}>
                            <Image
                              src={MasterCard}
                              alt="master card"
                              fluid={true}
                            />
                          </li>
                          <li className={classes["skrill"]}>
                            <Image src={Skrills} alt="skrill" fluid={true} />
                          </li>
                          <li className={classes["paypal"]}>
                            <Image src={PayPal} alt="paypal" fluid={true} />
                          </li>
                        </ul>
                        <Row className="mt-2 px-2">
                          <Col xs={12} xl={6}>
                            <div className={classes["card-details"]}>
                              <label htmlFor="">Card holder Name</label>
                              <Form.Control
                                type="text"
                                className={classes["card-info"]}
                                onChange={cardHolderNameChangeHandler}
                                value={cardHolderName}
                                id="cardHolderName"
                              />
                            </div>
                          </Col>
                          <Col xs={12} xl={6}>
                            <div className={classes["card-details"]}>
                              <label htmlFor="">Card Number</label>
                              <Form.Control
                                type="text"
                                className={classes["card-info"]}
                                onChange={cardNumberChangeHandler}
                                value={cardNumber}
                              />
                            </div>
                          </Col>
                          <Col xs={12} xl={6}>
                            <div className={classes["card-details"]}>
                              <label htmlFor="">CVV</label>
                              <Form.Control
                                type="text"
                                className={classes["card-info"]}
                                maxLength="3"
                                onChange={cvvChangeHandler}
                                value={cvv}
                              />
                            </div>
                          </Col>
                          <Col xs={12} xl={6}>
                            <div className={classes["card-details"]}>
                              <label htmlFor="">Expire Date</label>
                              <Form.Control
                                type="text"
                                className={classes["card-info"]}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                  <span className={classes["theme-btn"]}>
                    <Button type="submit">Donate Now</Button>
                  </span>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default MakeDonation;
