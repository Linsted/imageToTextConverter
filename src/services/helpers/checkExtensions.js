export default function checkExtensions(fileName) {
  const fileParts = fileName.split(".");
  const extension = fileParts[fileParts.length - 1];

  return extension === "jpeg" || extension === "png" || extension === "jpg"
    ? true
    : false;
}
