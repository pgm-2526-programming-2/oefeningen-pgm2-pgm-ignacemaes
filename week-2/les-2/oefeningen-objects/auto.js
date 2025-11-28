const auto = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blauw",
};
console.log(auto);

// Verander de kleur van de auto in de vorige oefening naar “rood”.
auto.color = "rood";
console.log(auto);

// Schrijf een script dat de merknaam van de auto in de vorige oefening ophaalt en weergeeft in de console.
console.log("Merk van de auto:", auto.brand);

// Voeg een nieuwe eigenschap toe aan het object auto genaamd brandstof en wijs deze de waarde “benzine” toe.
auto.fuel = "benzine";
console.log(auto);

// Verwijder de eigenschap jaar uit het object auto.
delete auto.year;
console.log(auto);
