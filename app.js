// oppgave 1
// variabel som sier navnet mitt
let myName = "Jostein";
// skriver ut hei og navnet mitt i konsollen
console.log("Hei " + myName);

// oppgave 2
// to tall
let tall1 = 372;
let tall2 = 159;
// regneoperasjoner
console.log(tall1 + tall2);
console.log(tall1 * tall2);
console.log(tall2 / tall1);
console.log(tall2 - tall1); 

// oppgave 3
// spør brukeren om alder
// let alder = prompt("Hvor gammel er du?");
// sjekker om brukeren er over 18 år
//if (alder > 18) {
  //console.log("Du får kjøpe øl");
//} else {
  //console.log("Du får ikke kjøpe øl");
//}

//oppgave 4
// spør brukeren om alder for å finne ut hvilken type billett de kan kjøpe
let bilett = prompt("Hvor gammel er du?");
if (bilett < 18) {
    console.log("Du får kjøpe barnebillett");
}
else if (bilett >= 18 && bilett < 67) {
    console.log("Du får kjøpe voksenbillett");
}
else {
    console.log("Du får kjøpe honnørbillett");
}