const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function sumOfArrayValues(arr_1, arr_2) {
  const result = new Array();
  if (arr_1.length === arr_2.length) {
    for (let i = 0; i < arr_1.length; i++) {
      result.push(arr_1[i] + arr_2[i]);
    }
    return result;
  }
  return "Ongelijke arrays";
}

console.log(sumOfArrayValues(array1, array2)); // [5, 7, 9]
