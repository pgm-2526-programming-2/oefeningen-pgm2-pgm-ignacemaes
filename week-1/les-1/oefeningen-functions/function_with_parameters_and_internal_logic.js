function controlAge(age) {
  if (age >= 18) {
    return "Volwassen";
  }
  return "Nog niet volwassen";
}

console.log(controlAge(16)); // Nog niet volwassen
console.log(controlAge(21)); // Volwassen
