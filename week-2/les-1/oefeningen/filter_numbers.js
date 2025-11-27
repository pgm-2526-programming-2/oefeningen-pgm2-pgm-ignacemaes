function filterEvenGetallen(array) {
  if (array !== undefined) {
    const filteredNumbers = array.filter((number) => {
      if (number % 2 === 0) {
        return number;
      }
    });
    return filteredNumbers;
  }
  return "Lege array";
}

let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen); // geeft [8, 6, 10]
