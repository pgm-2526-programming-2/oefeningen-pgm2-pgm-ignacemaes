// Schrijf een functie genaamd fetchData die gegevens van een externe API ophaalt met behulp van het fetch statement.
// Gebruik een try…catch statement om netwerkfouten af te handelen.
//  Druk in het geval van een fout de boodschap “Kon geen gegevens ophalen” af.

// Gebruik volgende url om de data op te halen: https://api.publicapis.org/entries
function fetchData(url) {
  try {
  } catch (error) {
    console.log("Er is misgegaan", error);
  }
}

fetchData("https://api.publicapis.org/entries");
