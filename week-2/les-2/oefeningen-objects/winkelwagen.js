const shoppingCartA = {
  item1: { name: "Product 1", price: 20 },
  item2: { name: "Product 2", price: 30 },
  item3: { name: "Product 3", price: 15 },
};

const itemNames = Object.keys(shoppingCartA);
console.log("Namen van items:", itemNames);

const itemPrices = Object.values(shoppingCartA).map((item) => item.price);
console.log("Prijzen van items:", itemPrices);

const itemEntries = Object.entries(shoppingCartA).map(([key, value]) => {
  const price = value.price;
  return `Item: ${key}, Price:€ ${price}`;
});
console.log("Namen en prijzen van items:", itemEntries);

const shoppingCartB = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],
  calculateTotal: function () {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  },
};

const totalPrice = shoppingCartB.calculateTotal();
console.log("Totale prijs van de winkelwagen:", totalPrice);
