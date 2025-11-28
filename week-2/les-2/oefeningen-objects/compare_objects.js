const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

function zijnObjectenIdentiek(obj1, obj2) {
  const stringA = JSON.stringify(obj1);
  const stringB = JSON.stringify(obj2);
  if (stringA === stringB) {
    return true;
  }
  return false;
}

console.log(zijnObjectenIdentiek(objectA, objectB));
