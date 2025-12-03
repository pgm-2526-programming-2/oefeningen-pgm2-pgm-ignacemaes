const message = new Error("Er ging iets mis.");

try {
  console.log("We voeren code uit");
  // Voorbeeld: item in de databank bestaat niet
  // Real-life throwen we zelf bijna niets, komt meestal uit library
  throw new Error("Item in de databank bestaat niet.");
} catch (error) {
  console.log("Er is iets misgegaan", error);
} finally {
  // Code die zowieso moet uitgevoerd worden. ook als er iets misgaat maar ook indien niet.
  console.log("Einde error handeling");
}
