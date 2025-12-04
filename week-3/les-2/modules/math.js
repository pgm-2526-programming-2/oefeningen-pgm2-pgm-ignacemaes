const DEFAULT_VALUE = 0;

function sum(a, b) {
  return a + b;
}

function multiply(a, n) {
  return a * b;
}

// Exporteren van een functie altijd met object, hierbij moeten we geen volgorde onthouden.
// module.exports = {
//   sum: sum,
//   multiply: multiply,
// };

// Object key advanced syntax, wanneer key hetzelfde is als de value gewoon de naam van de fuctie noteren
module.exports = {
  DEFAULT_VALUE,
  sum,
  multiply,
};
