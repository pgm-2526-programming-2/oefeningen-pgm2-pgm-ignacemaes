function myCallback() {
  return "Dit is de callback-functie";
}

function mainLogic(callback) {
  console.log(callback());
}

mainLogic(myCallback); // Dit is de callback-functie.
