import axios from "axios";
import { URL } from "./constants";

const sendText = (fileInput) => {
  const { REACT_APP_API_KEY } = import.meta.env;
  let formData = new FormData();
  formData.append("image", fileInput.files[0]);

  const config = {
    headers: {
      "X-Api-Key": REACT_APP_API_KEY,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(URL, formData, config);
};

export default sendText;
