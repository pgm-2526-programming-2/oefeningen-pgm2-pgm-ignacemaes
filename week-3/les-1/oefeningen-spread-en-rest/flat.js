combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]

function combineAllArrays(arr1, arr2, ...rest) {
  const newArray = [...arr1, ...arr2, ...rest].flat();
  console.log(newArray);
}
