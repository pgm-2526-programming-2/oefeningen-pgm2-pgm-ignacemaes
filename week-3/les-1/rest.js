// Selecteert de rest
function sum(a, b, ...rest) {
  console.log(rest); // rest neemt de overige argumenten over en slaat deze op in een array [3, 4]
  return a + b + rest.reduce((prev, curr) => prev + curr);
}

console.log(sum(1, 2, 3, 4));

// spread word gebruikt om een waarde ergens anders te plaatsen
