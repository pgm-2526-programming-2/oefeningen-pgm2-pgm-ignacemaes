function fetchData(link) {
  const dataCollection = fetch(link);
  console.log(dataCollection);
  setTimeout(() => {
    console.log(dataCollection);
  }, 1000);
}

fetchData("https://api.artic.edu/api/v1/artworks");
fetchData("https://dummyjson.com/products");
fetchData("https://dummyjson.com/users/1");
