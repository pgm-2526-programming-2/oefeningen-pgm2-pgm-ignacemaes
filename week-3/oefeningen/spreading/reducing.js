function addOnlyNumbers(...rest) {
  const numbers = rest.filter((item) => typeof item === "number");
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);

  console.log(
    `Er waren ${rest.length} argumenten, de som van de getallen is ${sum}.`
  );
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3);
// Er waren 6 argumenten, de som van de getallen is 15.
