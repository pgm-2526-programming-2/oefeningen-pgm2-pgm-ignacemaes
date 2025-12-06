const originalObject = { name: "Alice" };
function addProperty(obj, key, value) {
  const newObject = { ...obj, key: value };
  return newObject;
}
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }
