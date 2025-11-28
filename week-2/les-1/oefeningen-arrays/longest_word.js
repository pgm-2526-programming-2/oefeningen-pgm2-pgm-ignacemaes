let woordenArray = ["appel", "peer", "kiwi", "banaan"];
let langsteWoord = "";

for (const woord of woordenArray) {
  if (langsteWoord.length < woord.length) {
    langsteWoord = woord;
  }
}

console.log(langsteWoord);
