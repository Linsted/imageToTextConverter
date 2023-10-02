import { TfiBook } from "react-icons/tfi";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <span>
        <TfiBook />
      </span>
      <span>Image Reader</span>
    </header>
  );
};

export default Header;
