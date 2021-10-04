



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

const ethcard = document.getElementById('ethcard') 


btncross.addEventListener('click', function () {
   if (ethcard.classList.contains('minicardhide')) {
    ethcard.classList.remove('minicardhide');

    } else {
        ethcard.classList.add('minicardhide');
        ethminicard.classList.add('minicarddisplay');
    }

});

// LA AGREGA DESDE LA MINICARD DE ARRIBA

const ethminicard = document.getElementById('ethminicard') 


ethminicard.addEventListener('click', function () {
   if (ethcard.classList.contains('minicardhide')) {


    ethcard.classList.remove('minicardhide');
    ethminicard.classList.remove('minicarddisplay');

    } else {
        
        ethcard.classList.add('minicardhide');
    
    }

});


// BTCCARD - ELIMINA LA CARD

const btccard = document.getElementById('btccard') 


btncrossbtc.addEventListener('click', function () {
   if (btccard.classList.contains('minicardhide')) {
    btccard.classList.remove('minicardhide');

    } else {
        btccard.classList.add('minicardhide');
        btcminicard.classList.add('minicarddisplay');
    }

});

// BTC LA AGREGA DESDE LA MINICARD DE ARRIBA

const btcminicard = document.getElementById('btcminicard') 


btcminicard.addEventListener('click', function () {
   if (btccard.classList.contains('minicardhide')) {


    btccard.classList.remove('minicardhide');
    btcminicard.classList.remove('minicarddisplay');

    } else {
        
        btccard.classList.add('minicardhide');
    
    }

});

