// Symbol creeert een reference type. Daarom blijft resultaat fals ookal zijn ze hetzelfde.
const student = Symbol("Bonzo");
const person = Symbol("Bonzo");

console.log(
  student,
  student.toString(),
  student.description, // De waarde zelf
  student === person
);

// Uppercase variables = waarden die nooit zullen veranderen en gebruikt worden binnen het volledige project
const STATES = {
  LOADING: Symbol("Loading ..."),
  FINISHED_LOADING: Symbol("Loading ..."),
};

console.log(STATES.LOADING === STATES.FINISHED_LOADING);
