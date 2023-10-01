const httpErrorHandle = (response) => {
  if (!response?.data) {
    throw new Error("An error occured. There is no data.");
  }

  if (response.status >= 400 && response.status <= 599) {
    throw new Error("An error occured. Check error code.");
  }
};

export default httpErrorHandle;
