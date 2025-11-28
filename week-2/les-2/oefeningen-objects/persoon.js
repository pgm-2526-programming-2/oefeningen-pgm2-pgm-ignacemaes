const persoon = {
  name: "Anna",
  age: 25,
  address: {
    street: "Hoofdstraat",
    number: 123,
    city: "Stadsville",
  },
};
console.log(persoon);

console.log("Het straatnummer van deze persoon is:", persoon.address.number);

persoon.phoneNumber = "0480 69 13 18";
console.log(persoon);

const extraInfo = {
  hobby: "zwemmen",
  favoriteColor: "purple",
};

persoon.hobby = extraInfo.hobby;
persoon.favoriteColor = extraInfo.favoriteColor;
console.log(persoon);
