import PropTypes from "prop-types";

import styles from "./TranslatedText.module.css";

const TranslatedText = ({ text }) => {
  return (
    <div>
      <h1 className={styles.headerText}>Translated text</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

TranslatedText.propTypes = {
  text: PropTypes.string.isRequired
};

export default TranslatedText;
