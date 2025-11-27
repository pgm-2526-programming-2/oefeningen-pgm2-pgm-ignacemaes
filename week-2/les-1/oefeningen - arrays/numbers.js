const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

const filterOutnumbers = willekeurigeGetallen.filter((getal) => getal <= 10);
console.log(filterOutnumbers);

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

const checkNumbers = willekeurigeGetallen.every((getal) => getal < 20);
console.log(checkNumbers);

console.log(willekeurigeGetallen.join(" "));

const somGetallen = willekeurigeGetallen.reduce(
  (previousValue, currentvalue) => {
    return previousValue + currentvalue;
  }
);

console.log(somGetallen);

const dubbeleGetallen = willekeurigeGetallen.map((getal) => {
  if (getal === 2) {
    return getal;
  }

  return getal * 2;
});

console.log(dubbeleGetallen);

const checkNumber = willekeurigeGetallen.some((getal) => getal > 30);
console.log(checkNumber);
