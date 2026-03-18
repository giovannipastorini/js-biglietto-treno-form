/* 
Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere,
-Età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

const formEl= document.querySelector("form");
/* console.log(formEl); */
/* const kmFieldEl = document.getElementById("km-field"); */
/* console.log(kmFieldEl.value); */
const ageFieldEl= document.getElementById("age-field");
/* console.log(ageFieldEl); */
const submitFieldEl= document.getElementById("submit-field");
/* console.log(submitFieldEl); */


formEl.addEventListener("submit",
     function(event){
        event.preventDefault();

        console.log("evento submit verificato!");

        const kmFieldEl = document.getElementById("km-field");
        console.log(kmFieldEl.value);
        
     }

);