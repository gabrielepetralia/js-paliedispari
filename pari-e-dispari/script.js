// Inserimento e controllo numero utente
let isValid = false;
let numUtente;
do {
  numUtente = parseInt(prompt("Inserisci un numero da 0 a 5"));
  if (!(numUtente > 0 && numUtente < 5)) {
    alert("Devi inserire un numero compreso tra 0 e 5 , riprova");
  } else {
    isValid = true;
  }
} while (isValid === false);

// Inserimento e controllo scelta utente
isValid = false;
let sceltaUtente;
do {
  sceltaUtente = prompt("Scegli pari o dispari").toLocaleLowerCase();
  if (sceltaUtente === "pari" || sceltaUtente === "dispari") {
    isValid = true;
  } else {
    alert("Devi inserire 'pari' o 'dispari' , riprova");
  }
} while (isValid === false);


const numComputer = getRandom(0, 5);
const sum = numUtente + numComputer;
const message = document.getElementById("output");

// Messaggio di esito partita
if (pariDispari(sum) === sceltaUtente) {
  message.innerHTML = `Tuo numero: ${numUtente} <br>
  Numero computer: ${numComputer} <br>
  Hai scelto ${sceltaUtente} quindi hai vinto!`;
} else {
  message.innerHTML = `Tuo numero: ${numUtente} <br>
  Numero computer: ${numComputer} <br>
  Hai scelto ${sceltaUtente} quindi hai perso!`;
}

// Funzione numero random
function getRandom(min, max) {
  const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return numRandom;
}

// Funzione pari o dispari
function pariDispari(n) {
  const isPari = !(n % 2);
  let ris;
  if (isPari) {
    ris = "pari";
  } else {
    ris = "dispari";
  }
  return ris;
}
