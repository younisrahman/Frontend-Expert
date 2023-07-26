function flatten(value) {
  // Write your code here.
  if (typeof value !== "object" || value === null) return value;

  if (Array.isArray(value)) return flattenArray(value);
  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}
function flattenObject(object) {
  const flattenedObject = {};
  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);

    if (valueIsObject) Object.assign(flattenedObject, flattenedValue);
    else flattenedObject[key] = flattenedValue;
  }

  return flattenedObject;
}
