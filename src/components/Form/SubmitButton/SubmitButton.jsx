import React from "react";
import PropTypes from "prop-types";
import "./SubmitButton.scss";

const SubmitButton = ({ text }) => (
  <button type="submit" className="submit-button">
    {text}
    <i className="submit-button__arrow submit-button__right" />
  </button>
);

SubmitButton.defaultProps = {
  text: "Submit"
};

SubmitButton.propTypes = {
  text: PropTypes.string
};

export default SubmitButton;
