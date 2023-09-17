import React, { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import classes from "./OurContact.module.css";

const OurContactInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <Fragment>
      <Col xs={12} lg={6}>
        <div className={classes["form-name"]}>
          <input
            {...inputProps}
            onChange={onchange}
            onBlur={handleFocus}
            focused={focused.toString()}
            onFocus={() => (inputProps.name === "address") & setFocused(true)}
          />
          <span className={classes["error-message"]}>{errorMessage}</span>
        </div>
      </Col>
    </Fragment>
  );
};

export default OurContactInput;
