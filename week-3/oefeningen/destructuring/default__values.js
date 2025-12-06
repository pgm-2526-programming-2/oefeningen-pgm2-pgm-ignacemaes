const book = { title: "JavaScript Basics", author: "John Doe" };

// schrijf hier je code om de waarden toe te kennen aan variabelen
const { title = "Book title", author = "Unknown author", pages = 0 } = book;

console.log(title, author, pages);
