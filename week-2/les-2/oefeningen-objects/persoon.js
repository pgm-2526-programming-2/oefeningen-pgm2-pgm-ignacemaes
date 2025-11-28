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

// Schrijf een script dat het straatnummer van het adres-object in de vorige oefening ophaalt en weergeeft in de console.
console.log("Het straatnummer van deze persoon is:", persoon.address.number);

// Breid het object persoon uit door de eigenschap telefoon toe te voegen met een willekeurig telefoonnummer.
persoon.phoneNumber = "0480 69 13 18";
console.log(persoon);

// Maak een nieuw object genaamd extraInfo met willekeurige extra informatie (bijvoorbeeld hobby, favorieteKleur, enz.).
// Voeg deze informatie toe aan het object persoon.
const extraInfo = {
  hobby: "zwemmen",
  favoriteColor: "purple",
};

persoon.hobby = extraInfo.hobby;
persoon.favoriteColor = extraInfo.favoriteColor;
console.log(persoon);
