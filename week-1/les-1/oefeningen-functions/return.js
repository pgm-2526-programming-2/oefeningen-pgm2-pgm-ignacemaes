function checkAge_1(age) {
  if (age > 18) {
    return true;
  } else {
    return "Did parents allow you?";
  }
}

console.log(checkAge_1(17));

function checkAge_2(age) {
  if (age > 18) {
    return true;
  }
  // Werkt deze functie nog zoals verwacht?
  return "Did parents allow you?";
}

console.log(checkAge_2(17));
