"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
// Example usage:
makeSandwich("ham", "cheese", "lettuce", "tomato");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly");
