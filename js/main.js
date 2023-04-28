//Dichiarazioni variabili globali
let age;
let youngDiscount;
let oldDiscount;
let globalPrice;
let dCity;
let aCity;
let seat;
let randomSeatNumber = Math.floor(Math.random() * 9);
let randomKm =Math.floor((Math.random() * 1000)+1);
let totalPrice;
let getName;
let getSurname;
let generator = document.getElementById("ticketGen");

//Data odierna
const date = new Date();
let day = date.getDate() + 3;
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
document.getElementById("current-date").innerHTML = currentDate;




//Chilometraggio random
document.getElementById("distance").innerHTML = `${randomKm} Km`;

//Orario dinamico
const now = new Date();
const departureHour = now.getHours() + ':' + now.getMinutes();
console.log(departureHour);
document.getElementById("departure-time").innerHTML = `${departureHour}`;

//posto a sedere random
document.getElementById("seggiolino").innerHTML =  `${randomSeatNumber}A`;


//Impostazione prezzo globale (prima dello sconto)
globalPrice = (randomKm*0.21).toFixed(2);
console.log(globalPrice);



generator.addEventListener("click", function() {
    //Inserimento città di partenza
    dCity = document.getElementById("dCity").value;
    document.getElementById("departure").innerHTML = dCity;

    // //Inserimento Città di arrivo
    aCity = document.getElementById("aCity").value;
    document.getElementById("arrival").innerHTML = aCity;

    // Inserimento Nome passeggero
    getName = document.getElementById("name").value;

    // Inserimento Cognome passeggero
    getSurname = document.getElementById("surname").value;

    // Inserimento età passeggero
    age = document.getElementById("age").value;

    // document.getElementById("ticketPassengerName").innerHTML = `${getName} + ${getSurname}`;
    document.getElementById("ticketPassengerName").innerHTML = `${getName} ${getSurname}`;
    console.log(getName + getSurname);
    

    //Setup sconti
    if (age < 18){//Sconto young
        youngDiscount = (globalPrice - (globalPrice*0.20)).toFixed(2);
        document.getElementById("total-price").innerHTML =  `${youngDiscount}€`;
        document.getElementById("discount-label").innerHTML =  "Sconto Junior 20%";
        document.getElementById("tipo-passeggero").innerHTML =  "Junior";
        console.log(youngDiscount);
    } else if (age > 65){//Sconto senior
        oldDiscount = (globalPrice - (globalPrice*0.40)).toFixed(2);
        document.getElementById("total-price").innerHTML =  `${oldDiscount}€`;
        document.getElementById("discount-label").innerHTML =  "Sconto Senior 40%";
        document.getElementById("tipo-passeggero").innerHTML =  "Senior";
        console.log(oldDiscount);
    }
    else{//prezzo regolare
        document.getElementById("total-price").innerHTML =  `${globalPrice}€`;
        document.getElementById("tipo-passeggero").innerHTML =  "Ordinario";
        console.log(globalPrice);
    }

    
    
    
     
  });

