// Je code hier
function mergeOptions(obj1, obj2) {
  const newObject = { ...obj1, ...obj2 };
  console.log(newObject);
}

// Voorbeeldgebruik:
mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" });
// Output: { option1: "A", option2: "B", option3: "C", option4: "D" }
