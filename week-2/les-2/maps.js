// Instelling
const regionNotation = "btw";

const product = {
  name: "Game Boy",
  description:
    "an 8-bit handheld game console developed by Nintendo, first released in 1989, and known for its iconic status in gaming history",
  price: 89.99,
  [regionNotation]: 21, //VAT bij europese webshop, BTW bij belgische webshop
};

product.color = "red";
product.color = "blue";
product[regionNotation] = 32;
console.log(product);

const productKeys = Object.keys(product);
console.log(productKeys.length);

// Alternatief voor Objecten met meer methoden
const productMap = new Map();
productMap.set("price", 25);
productMap.set("name", "Game Boy");
productMap.set(
  "description",
  "an 8-bit handheld game console developed by Nintendo, first released in 1989, and known for its iconic status in gaming history"
);

console.log(productMap);
productMap.set("color", "red");
productMap.set("color", "blue");
productMap.set(regionNotation, 21);

const mapLenght = productMap.size;
console.log(productMap, mapLenght);
