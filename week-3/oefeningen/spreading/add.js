add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7

function add(a, b, ...rest) {
  const array = [a, b, ...rest];
  console.log(array.length);
}
