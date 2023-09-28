import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ label, error, type, name, accept }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        <span className={styles.labeltext}>{label}</span>
        <input
          accept={accept}
          name={name}
          className={styles.input}
          type={type}
        />
        {error && <span className={styles.inputError}>{error}</span>}
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
