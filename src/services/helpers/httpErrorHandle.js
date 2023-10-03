import { noDataError, serverError } from "./constants";

const httpErrorHandle = (response) => {
  if (!response?.data) {
    throw new Error(noDataError);
  }

  if (response.status >= 400 && response.status <= 599) {
    throw new Error(serverError);
  }
};

export default httpErrorHandle;
