const auto = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blauw",
};
console.log(auto);

auto.color = "rood";
console.log(auto);

console.log("Merk van de auto:", auto.brand);

auto.fuel = "benzine";
console.log(auto);

delete auto.year;
console.log(auto);
