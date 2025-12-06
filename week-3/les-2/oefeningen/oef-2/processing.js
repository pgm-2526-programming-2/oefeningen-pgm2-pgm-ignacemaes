function addInformationToList(array, object) {
  array.push(object);
}

function returnedBooks(book) {
  book.returned = true;
}

const loansPerMember = {};
function calculateLoanPerMember(loans) {
  loans.forEach((loan) => {
    loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
  });
}

module.exports = { addInformationToList, returnedBooks, loansPerMember, calculateLoanPerMember };
