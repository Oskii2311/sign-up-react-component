import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Input.scss";

library.add(faAt, faLock, faUser);

const Input = ({ name, type, placeholder, icon, required, change }) => (
  <div className="input-container">
    <label className="input-container__label" htmlFor={name}>
      <FontAwesomeIcon icon={icon} />
      <input
        id={name}
        className="input-container__label__input"
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={change}
        autoComplete="off"
      />
    </label>
  </div>
);

Input.defaultProps = {
  type: "text",
  placeholder: "",
  change: {}
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  change: PropTypes.instanceOf(Function)
};

export default Input;
