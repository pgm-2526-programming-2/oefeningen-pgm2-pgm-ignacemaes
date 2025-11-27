const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

console.log(willekeurigeNamenArray);

const nieuweArray = willekeurigeNamenArray.flat();
console.log(nieuweArray);

for (const array of willekeurigeNamenArray) {
  array.shift();
}

console.log(willekeurigeNamenArray);

willekeurigeNamenArray.pop();
console.log(willekeurigeNamenArray);
