import path from "path";
import { fileURLToPath } from "url";

function getFilename(metaUrl) {
  const filename = fileURLToPath(metaUrl);
  return filename;
}
function getDirname(metaUrl) {
  const dirname = path.dirname(getFilename(metaUrl));
  return dirname;
}
function isString(input) {
  return typeof input === "string";
}
function isEmpty(input) {
  return !(input.length && input.length > 0);
}
function isArray(input) {
  return Array.isArray(input);
}
function isObject(input) {
  return (!Array.isArray(input) && typeof input === "object");
}
export {
  getFilename, getDirname, isString, isEmpty, isArray, isObject,
};
