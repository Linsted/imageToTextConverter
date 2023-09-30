import PropTypes from "prop-types";
import toast from "react-hot-toast";

import sendText from "../../api/sendText";
import httpErrorHandle from "../../services/helpers/httpErrorHandle";
import Button from "../Button/Button";
import BUTTON_TYPES from "../Button/constants";
import Input from "../Input/Input";

import checkExtensions from "../../services/helpers/checkExtensions";
import styles from "./Form.module.css";
import { inputType, labelText } from "./constants";

const Form = ({ setDetails, setIsLoading }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInput = event.target.file;
    const fileName = fileInput.files[0].name;

    if (fileInput.files.length === 0) {
      return toast.error("Please add file!");
    }

    if (!checkExtensions(fileName)) {
      return toast.error("Wrong file type!");
    }

    try {
      setIsLoading(true);

      const response = await sendText(fileInput);

      httpErrorHandle(response);

      setDetails(response.data);
    } catch (error) {
      console.error(error);

      toast.error("Ooops... An error occurred, please try later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label={labelText}
        name={inputType}
        type={inputType}
        accept="image/png, image/jpeg"
      />
      <Button text="Submit" buttonType={BUTTON_TYPES.SUBMIT} />
    </form>
  );
};

Form.propTypes = {
  setDetails: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Form;
