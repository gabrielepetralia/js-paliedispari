const parola = prompt("Inserisci una parola");
const message = document.getElementById("output");

if(isPalindroma(parola)){
  message.innerHTML = `La parola ${parola} è palindroma.`;
} else {
  message.innerHTML = `La parola ${parola} NON è palindroma.`;
}

function isPalindroma(parola){
  let isPal = true;
  const parolaArray = parola.toLowerCase().split("");

  for(let i=0; i<parolaArray.length && isPal; i++){
    if(!(parolaArray[i]===parolaArray.reverse()[i])) isPal = false;
  }
  
  return isPal;
}