const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
function mergeObjects(obj1, obj2) {
  const newObject = { ...obj1, ...obj2 };
  return newObject;
}
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }
