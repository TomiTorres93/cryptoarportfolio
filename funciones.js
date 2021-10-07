



setTimeout(function() {
    $( document ).ready(function() {
        localStorage.setItem("currencies", JSON.stringify(currencies))
});
    
if (nombre.value == "ETH"){
    document.getElementById("precio").value = currencies[0];
} if (nombre.value == "BTC"){
    document.getElementById("precio").value = currencies[1];
}  if (nombre.value == "ADA"){
    document.getElementById("precio").value = currencies[2];
} if (nombre.value == "MATIC"){
    document.getElementById("precio").value = currencies[3];
}; 

}, 500);

setTimeout(function() {}, 500);









// Agregar y quitar monedas del dashboard

// ETHCARD - ELIMINA LA CARD

const ethcard2 = document.querySelector('.ethcard')


btncross.addEventListener('click', function () {
   if (ethcard2.classList.contains('minicardhide')) {
    ethcard2.classList.remove('minicardhide');

    } else {
        ethcard2.classList.add('minicardhide');
        ethminicard.classList.add('minicarddisplay');
    }

});

// LA AGREGA DESDE LA MINICARD DE ARRIBA

const ethminicard = document.getElementById('ethminicard') 


ethminicard.addEventListener('click', function () {
   if (ethcard2.classList.contains('minicardhide')) {


    ethcard2.classList.remove('minicardhide');
    ethminicard.classList.remove('minicarddisplay');

    } else {
        
        ethcard2.classList.add('minicardhide');
    
    }

});


// BTCCARD - ELIMINA LA CARD

const btccard2 = document.querySelector('#btccard') 


btncrossbtc.addEventListener('click', function () {
   if (btccard2.classList.contains('minicardhide')) {
    btccard2.classList.remove('minicardhide');

    } else {
        btccard2.classList.add('minicardhide');
        btcminicard.classList.add('minicarddisplay');
    }

});

// BTC LA AGREGA DESDE LA MINICARD DE ARRIBA

const btcminicard = document.getElementById('btcminicard') 


btcminicard.addEventListener('click', function () {
   if (btccard2.classList.contains('minicardhide')) {


    btccard2.classList.remove('minicardhide');
    btcminicard.classList.remove('minicarddisplay');

    } else {
        
        btccard.classList.add('minicardhide');
    
    }

});


// adacard - ELIMINA LA CARD

const adacard2 = document.querySelector('#adacard') 


btncrossada.addEventListener('click', function () {
   if (adacard2.classList.contains('minicardhide')) {
    adacard2.classList.remove('minicardhide');

    } else {
        adacard2.classList.add('minicardhide');
        adaminicard.classList.add('minicarddisplay');
    }

});

// ADA LA AGREGA DESDE LA MINICARD DE ARRIBA

const adaminicard = document.getElementById('adaminicard') 


adaminicard.addEventListener('click', function () {
   if (adacard2.classList.contains('minicardhide')) {


    adacard2.classList.remove('minicardhide');
    adaminicard.classList.remove('minicarddisplay');

    } else {
        
        btccard.classList.add('minicardhide');
    
    }

});





// FONDOS ROJO/VERDE PARA LAS CARDS
setTimeout(function() {
const ethcardcolor = document.querySelector('.ethpricecolor') 
const ethpricecolor = currencies[0]

console.log(ethpricecolor)

if (ethpricecolor > 0) {
    ethcardcolor.classList.add('fondoverde')
} else {
    ethcardcolor.classList.add('fondorojo')
}


const adacardcolor = document.querySelector('.adapricecolor') 
const adapricecolor = currencies[31]

console.log(adapricecolor)


if (adapricecolor > 0) {
    adacardcolor.classList.add('fondoverde')
} else {
    adacardcolor.classList.add('fondorojo')
}









}, 700);