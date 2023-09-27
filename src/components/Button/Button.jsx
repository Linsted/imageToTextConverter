import PropTypes from "prop-types";

import styles from "./Button.module.css";
import BUTTON_TYPES from "./constants";

const Button = ({
  text,
  disabled = false,
  onClick = () => {},
  buttonType = BUTTON_TYPES.BUTTON
}) => {
  return (
    <button
      className={styles.button}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES))
};

export default Button;
