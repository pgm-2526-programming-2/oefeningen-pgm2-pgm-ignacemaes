const translations = {
  BE: "Welkom in België",
  NL: "Welkom in Nederland",
  US: "Welcome in the US",
  DEFAULT: "Hi there!",
};

function greetUser(ip = "") {
  const data = fetch(`https://api.country.is/${ip}`, { method: "GET" })
    .then((response) => response.json())
    .then((json) => {
      const country = json.country;
      if (translations[country]) {
        console.log(translations[country]);
      } else {
        console.log(translations.DEFAULT);
      }
    });
}

greetUser("77.1.2.3"); // Welcome in the US
