import { allowedExtensions } from "./constants";

export default function checkExtensions(fileName) {
  const fileParts = fileName.split(".");
  const extension = fileParts[fileParts.length - 1];

  return allowedExtensions.some(
    (allowedExtension) => allowedExtension === extension
  )
    ? true
    : false;
}
