import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import Form from "./components/Form/Form";
import "./index.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import transformArrayToString from "./services/helpers/transformArrayToString";
import TranslatedText from "./components/TranslatedText/TranslatedText";

export default function App() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const translatedText = transformArrayToString(details);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form setDetails={setDetails} setIsLoading={setIsLoading} />
        {details.length > 0 ? (
          <TranslatedText text={translatedText} />
        ) : (
          <h2 className={styles.fallbackText}>Please, make your request.</h2>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className={styles.spinnerWrapper}>
        <ClipLoader loading={isLoading} color="#5082e6" />
      </div>
    </>
  );
}
