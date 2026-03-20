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

const kmFieldEl = document.getElementById("km-field");
const ageFieldEl= document.getElementById("age-field");
const submitFieldEl= document.getElementById("submit-field");






formEl.addEventListener("submit",
     function(event){
        event.preventDefault();

          console.log("evento submit verificato!");
          //Collecting data
          //dati per calcolare il prezzo del biglietto:
          //chilometri
          const km=Number(kmFieldEl.value);
          console.log(km);
          //età passeggero
          const age=Number(ageFieldEl.value);
          console.log(age);
          //price per km
          const pricePerKm=0.21;

          //Elaboration data:
          let priceTicket= km*pricePerKm;
          //controllo sull'età per determinare lo sconto
          if (age < 18){
               //va applicato uno sconto del 20% per i minorenni,
               priceTicket*=0.8;
          }else if (age > 65){
               //va applicato uno sconto del 40% per gli over 65.
               priceTicket*=0.6;
          }
          //uso il metodo toFixed per ottenere due cifre decimali
          //console.log(priceTicket.toFixed(2)+" euro");

          //selezioni i nodi del html relativi ai dettagli del biglietto
          const detailsTicket=document.getElementById("ticket-details");
          const personNameEl= document.getElementById("person-name-detail");          
          const ageEl=document.getElementById("age-detail");
          const kmEl=document.getElementById("km-detail");
          const priceEl=document.getElementById("price-detail");

          //modifico i nodi
          personNameEl.innerText=document.getElementById("username-field").value;
          ageEl.innerText=`${age}`;
          kmEl.innerText=`${km}`;
          priceEl.innerText=`${priceTicket.toFixed(2)}`;

          //rendo visibile il i dettagli del biglietto:
          detailsTicket.classList.remove("d-none");

          //reset del form 
          formEl.reset();
     
     }

);