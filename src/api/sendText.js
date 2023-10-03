import axios from "axios";
import { URL } from "./constants";

const sendText = (fileInput) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  let formData = new FormData();

  formData.append("image", fileInput.files[0]);

  const config = {
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(URL, formData, config);
};

export default sendText;
