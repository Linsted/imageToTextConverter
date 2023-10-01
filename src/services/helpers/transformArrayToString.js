const transformArrayToString = (wordsArray) =>
  wordsArray.map((word) => word.text).join(" ");

export default transformArrayToString;
