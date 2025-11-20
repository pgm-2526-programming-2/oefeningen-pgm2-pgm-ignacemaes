// let amountOfMessages = 0;

// function showMessage() {
//   console.log("Hello World!");
//   amountOfMessages += 1;

//   if (amountOfMessages === 10) {
//     return;
//   }
//   showMessage();
// }

// showMessage();

// Use cases? Maken van een menu met submenus, die submenus hebben, ...
// Use cases? Boomstructuren omzetten naar een lijst

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
    subpages: [
      {
        name: "Awards",
        path: "/awards",
        subpages: [
          {
            name: "Nominees",
            path: "/nominees",
          },
          {
            name: "Sites of the day",
            path: "/sotd",
          },
        ],
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
];

//Oefening: log de pagina's en hun path in de console
// 1. Zonder recurssie
// showPages(menu);

// function showPages(pages) {
//   for (const page of pages) {
//     console.log(page.name, page.path);

//     let subPages = page.subpages;
//     if (subPages !== undefined) {
//       for (const subPage of subPages) {
//         console.log(subPage.name, subPage.path);
//         subPages = subPage.subpages;
//         if (subPages !== undefined) {
//           for (const subPage of subPages) {
//             console.log(subPage.name, subPage.path);
//           }
//         }
//       }
//     }
//   }
// }

// 2. Met recurssie
showPages(menu);
function showPages(pages) {
  if (pages !== undefined) {
    for (const page of pages) {
      console.log(`Name: ${page.name} -- ${page.path}`);
      showPages(page.subpages);
    }
  }
}
