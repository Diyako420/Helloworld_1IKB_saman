//lag pseudokode og/eller flytskjema til oppgava: lag et javascript-program som velger et tilfeldig heltall mellom 1 og 10. deretter skal brukeren skrive inn et tall for å gjette hvilket programmet har valgt. hvis tallet brukeren gjetter er riktig, skal programmet vise melding bra jobba. hvis tallet ikke stemmer, skal programmet vise meldingen feil prøv igjen




// Funksjon som velger et tilfeldig heltall fra 1 til 10
function getRandomInteger() {
  return Math.floor(Math.random() * 10) + 1;
}

// Skriver ut det tilfeldige tallet i konsollen
console.log(getRandomInteger());


