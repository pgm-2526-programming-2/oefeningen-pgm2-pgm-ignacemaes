// Ongeorganiseerd en complex script voor bibliotheekbeheer
const { books, members, loans } = require("./data.js");
const { addInformationToList, returnedBooks, loansPerMember, calculateLoanPerMember } = require("./processing.js");
const { showBooks, showMembers, showLoans, showBooksPerMember } = require("./reporting.js");

// Boeken toevoegen
addInformationToList(books, {
  id: 1,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  genre: "Fiction",
});
addInformationToList(books, {
  id: 2,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: "Drama",
});
addInformationToList(books, {
  id: 3,
  title: "1984",
  author: "George Orwell",
  genre: "Dystopian",
});

// Leden toevoegen
addInformationToList(members, { id: 101, name: "Alice Johnson", membershipType: "Premium" });
addInformationToList(members, { id: 102, name: "Bob Smith", membershipType: "Basic" });
addInformationToList(members, { id: 103, name: "Eve Williams", membershipType: "Premium" });

// Uitleningen uitvoeren
addInformationToList(loans, {
  bookId: 1,
  memberId: 101,
  dueDate: "2023-05-01",
  returned: false,
});
addInformationToList(loans, {
  bookId: 2,
  memberId: 102,
  dueDate: "2023-04-15",
  returned: false,
});
addInformationToList(loans, {
  bookId: 3,
  memberId: 103,
  dueDate: "2023-06-01",
  returned: false,
});

// Simuleer enkele boeken die zijn teruggebracht
returnedBooks(loans[0]);
returnedBooks(loans[2]);

// Weergave van boeken
showBooks(books);

// Weergave van leden
showMembers(members);

// Weergave van uitleningen
showLoans(loans, books, members);

// Bereken het aantal uitgeleende boeken per lid
calculateLoanPerMember(loans);

// Weergave van het aantal uitgeleende boeken per lid
showBooksPerMember(loansPerMember, members);
