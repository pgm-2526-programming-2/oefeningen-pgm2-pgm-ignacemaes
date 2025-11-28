const dropdownContainer = document.getElementById("dropdown-container");
let htmlDropdownMenu = "";

generateDropdownHTML(dropdownMenu);

function generateDropdownHTML(dropdownObject) {
  if (dropdownObject !== undefined) {
    for (const key in dropdownObject) {
      console.log(dropdownObject[key]);
      if (Array.isArray(dropdownObject[key])) {
        for (const element of dropdownObject[key]) {
          if (typeof element === "string") {
            htmlDropdownMenu += `<li class="item">${element}</li>`;
          } else {
            generateDropdownHTML(element);
          }
        }
      } else {
        htmlDropdownMenu += `<li class="label">${dropdownObject[key]}</li>`;
      }
    }
  }
}

dropdownContainer.innerHTML += `<ul>${htmlDropdownMenu}</ul>`;
