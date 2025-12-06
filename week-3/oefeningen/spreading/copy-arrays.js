const originalArray = [1, 2, 3];
function copyArray(arr) {
  const newArray = [...arr];
  return newArray;
}
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]
