



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


//REMOVE CARD FUNCTION
function removeCard(card, minicard, btn) {
   btn.addEventListener('click', function () {
   if (card.classList.contains('minicardhide')) {
    card.classList.remove('minicardhide');

    } else {
        card.classList.add('minicardhide');
        minicard.classList.add('minicarddisplay');
    }

});
}

//ADD CARD FUNCTION
function addCard(card, minicard) {
minicard.addEventListener('click', function () {
   if (card.classList.contains('minicardhide')) {


    card.classList.remove('minicardhide');
    minicard.classList.remove('minicarddisplay');

    } else {
        
        card.classList.add('minicardhide');
    
    }

});

}

// ETHCARD - ADD & REMOVE CARD
const ethminicard = document.getElementById('ethminicard');
const ethcard2 = document.querySelector('.ethcard');
const btncross = document.getElementById('btncrosseth');
let ethRemoveCard = removeCard(ethcard2, ethminicard, btncross)
let ethAddCard = addCard(ethcard2, ethminicard)


// BTCCARD - ADD & REMOVE CARD
const btcminicard = document.getElementById('btcminicard');
const btccard2 = document.querySelector('.btccard');
const btncrossbtc = document.getElementById('btncrossbtc');
let btcRemoveCard = removeCard(btccard2, btcminicard, btncrossbtc)
let btcAddCard = addCard(btccard2, btcminicard)

// adacard - ADD & REMOVE CARD
const adaminicard = document.getElementById('adaminicard');
const adacard2 = document.querySelector('.adacard');
const btncrossada = document.getElementById('btncrossada');
let adaRemoveCard = removeCard(adacard2, adaminicard, btncrossada)
let adaAddCard = addCard(adacard2, adaminicard)


// maticcard - ADD & REMOVE CARD
const maticminicard = document.getElementById('maticminicard');
const maticcard2 = document.querySelector('.maticcard');
const btncrossmatic = document.getElementById('btncrossmatic');
let maticRemoveCard = removeCard(maticcard2, maticminicard, btncrossmatic)
let maticAddCard = addCard(maticcard2, maticminicard)

// cakecard - ADD & REMOVE CARD
const cakeminicard = document.getElementById('cakeminicard');
const cakecard2 = document.querySelector('.cakecard');
const btncrosscake = document.getElementById('btncrosscake');
let cakeRemoveCard = removeCard(cakecard2, cakeminicard, btncrosscake)
let cakeAddCard = addCard(cakecard2, cakeminicard)

// solcard - ADD & REMOVE CARD
const solminicard = document.getElementById('solminicard');
const solcard2 = document.querySelector('.solcard');
const btncrosssol = document.getElementById('btncrosssol');
let solRemoveCard = removeCard(solcard2, solminicard, btncrosssol)
let solAddCard = addCard(solcard2, solminicard)

// bnbcard - ADD & REMOVE CARD
const bnbminicard = document.getElementById('bnbminicard');
const bnbcard2 = document.querySelector('.bnbcard');
const btncrossbnb = document.getElementById('btncrossbnb');
let bnbRemoveCard = removeCard(bnbcard2, bnbminicard, btncrossbnb)
let bnbAddCard = addCard(bnbcard2, bnbminicard)

// lunacard - ADD & REMOVE CARD
const lunaminicard = document.getElementById('lunaminicard');
const lunacard2 = document.querySelector('.lunacard');
const btncrossluna = document.getElementById('btncrossluna');
let lunaRemoveCard = removeCard(lunacard2, lunaminicard, btncrossluna)
let lunaAddCard = addCard(lunacard2, lunaminicard)

// dotcard - ADD & REMOVE CARD
const dotminicard = document.getElementById('dotminicard');
const dotcard2 = document.querySelector('.dotcard');
const btncrossdot = document.getElementById('btncrossdot');
let dotRemoveCard = removeCard(dotcard2, dotminicard, btncrossdot)
let dotAddCard = addCard(dotcard2, dotminicard)

// alcxcard - ADD & REMOVE CARD
const alcxminicard = document.getElementById('alcxminicard');
const alcxcard2 = document.querySelector('.alcxcard');
const btncrossalcx = document.getElementById('btncrossalcx');
let alcxRemoveCard = removeCard(alcxcard2, alcxminicard, btncrossalcx)
let alcxAddCard = addCard(alcxcard2, alcxminicard)



// FUNCIÓN FONDOS ROJO/VERDE PARA LAS CARDS DEPENDIENDO DE SI SUBIÓ O BAJÓ DE PRECIO EN LAS ÚLTIMAS 24HS

function colorize24price(cardcolour, pricecolour) {
    
if (pricecolour >= 0) {
    cardcolour.classList.add('fondoverde')
} if (pricecolour < 0) {
    cardcolour.classList.add('fondorojo')
}

}

// FONDOS ROJO/VERDE PARA LAS CARDS
setTimeout(function() {

const ethcardcolour = document.querySelector('.ethpricecolor') 
const ethpricecolour = ether[2]
let ethcolour = colorize24price(ethcardcolour, ethpricecolour)

//CARDANO

const adacardcolour = document.querySelector('.adapricecolor') 
const adapricecolour = cardano[2]
let adacolour = colorize24price(adacardcolour, adapricecolour)

//BNB

const bnbcardcolor = document.querySelector('.bnbpricecolor') 
const bnbpricecolor = bnb[2]
let bnbcolour = colorize24price(bnbcardcolor, bnbpricecolor)

//BTC

const btccardcolor = document.querySelector('.btcpricecolor') 
const btcpricecolor = bitcoin[2]
let btccolour = colorize24price(btccardcolor, btcpricecolor)

//matic

const maticcardcolor = document.querySelector('.maticpricecolor') 
const maticpricecolor = matic[2]
let maticcolour = colorize24price(maticcardcolor, maticpricecolor)

//solana

const solanacardcolor = document.querySelector('.solanapricecolor') 
const solanapricecolor = solana[2]
let solanacolour = colorize24price(solanacardcolor, solanapricecolor)

//cake

const cakecardcolor = document.querySelector('.cakepricecolor') 
const cakepricecolor = cake[2]
let cakecolour = colorize24price(cakecardcolor, cakepricecolor)

//dot
const dotcardcolor = document.querySelector('.dotpricecolor') 
const dotpricecolor = polkadot[2]
let dotcolour = colorize24price(dotcardcolor, dotpricecolor)

//luna

const lunacardcolor = document.querySelector('.lunapricecolor') 
const lunapricecolor = luna[2]
let lunacolour = colorize24price(lunacardcolor, lunapricecolor)

//alcx

const alcxcardcolor = document.querySelector('.alcxpricecolor') 
const alcxpricecolor = alchemix[2]
let alcxcolour = colorize24price(alcxcardcolor, alcxpricecolor)
}, 800);




// ACCEDER A LA SECCIÓN NOTAS DE CADA MONEDA

//Función - Mostrar Notebook 

function showNotebook(evento, stats, btn, notebook) {
    evento.addEventListener('click', function () {
    if (stats.classList.contains('minicardhide')) {
    stats.classList.remove('minicardhide');
    btn.classList.remove('minicardhide');
    notebook.classList.remove('minicardhide');
    }     
    else { 
    stats.classList.add('minicardhide');
    btn.classList.add('minicardhide');
    notebook.classList.add('minicarddisplay');
    }});
}

//Función - Ocultar Notebook y mostrar stats
function showPrices(evento, stats, btn, notebook) {
    evento.addEventListener('click', function () {
        if (notebook.classList.contains('minicarddisplay')) {     
        stats.classList.remove('minicardhide');
        btn.classList.remove('minicardhide');
        notebook.classList.remove('minicarddisplay');
    }     
    })}



// ETH - ocultar y mostrar notebook/stats

const ethShowNotebookBTN = document.getElementById('ethShowNotebookBTN') 
const ethnotebook = document.getElementById('ethnotebook') 
const ethSTATS = document.querySelector('#ethSTATS') 
let ethShowNB = showNotebook(ethShowNotebook, ethSTATS, ethShowNotebookBTN, ethnotebook)
let ethShowPP = showPrices(ethShowPrices, ethSTATS, ethShowNotebookBTN, ethnotebook)

// btc - ocultar y mostrar notebook/stats
    
const btcShowNotebookBTN = document.getElementById('btcShowNotebookBTN') 
const btcnotebook = document.getElementById('btcnotebook') 
const btcSTATS = document.querySelector('#btcSTATS') 
let btcShowNB = showNotebook(btcShowNotebook, btcSTATS, btcShowNotebookBTN, btcnotebook)
let btcShowPP = showPrices(btcShowPrices, btcSTATS, btcShowNotebookBTN, btcnotebook)

// ada - ocultar y mostrar notebook/stats
    
const adaShowNotebookBTN = document.getElementById('adaShowNotebookBTN') 
const adanotebook = document.getElementById('adanotebook') 
const adaSTATS = document.querySelector('#adaSTATS') 
let adaShowNB = showNotebook(adaShowNotebook, adaSTATS, adaShowNotebookBTN, adanotebook)
let adaShowPP = showPrices(adaShowPrices, adaSTATS, adaShowNotebookBTN, adanotebook)

// matic - ocultar y mostrar notebook/stats
    
const maticShowNotebookBTN = document.getElementById('maticShowNotebookBTN') 
const maticnotebook = document.getElementById('maticnotebook') 
const maticSTATS = document.querySelector('#maticSTATS') 
let maticShowNB = showNotebook(maticShowNotebook, maticSTATS, maticShowNotebookBTN, maticnotebook)
let maticShowPP = showPrices(maticShowPrices, maticSTATS, maticShowNotebookBTN, maticnotebook)

// cake - ocultar y mostrar notebook/stats
    
const cakeShowNotebookBTN = document.getElementById('cakeShowNotebookBTN') 
const cakenotebook = document.getElementById('cakenotebook') 
const cakeSTATS = document.querySelector('#cakeSTATS') 
let cakeShowNB = showNotebook(cakeShowNotebook, cakeSTATS, cakeShowNotebookBTN, cakenotebook)
let cakeShowPP = showPrices(cakeShowPrices, cakeSTATS, cakeShowNotebookBTN, cakenotebook)

// alcx - ocultar y mostrar notebook/stats
    
const alcxShowNotebookBTN = document.getElementById('alcxShowNotebookBTN') 
const alcxnotebook = document.getElementById('alcxnotebook') 
const alcxSTATS = document.querySelector('#alcxSTATS') 
let alcxShowNB = showNotebook(alcxShowNotebook, alcxSTATS, alcxShowNotebookBTN, alcxnotebook)
let alcxShowPP = showPrices(alcxShowPrices, alcxSTATS, alcxShowNotebookBTN, alcxnotebook)

// sol - ocultar y mostrar notebook/stats
    
const solShowNotebookBTN = document.getElementById('solShowNotebookBTN') 
const solnotebook = document.getElementById('solnotebook') 
const solSTATS = document.querySelector('#solSTATS') 
let solShowNB = showNotebook(solShowNotebook, solSTATS, solShowNotebookBTN, solnotebook)
let solShowPP = showPrices(solShowPrices, solSTATS, solShowNotebookBTN, solnotebook)

// luna - ocultar y mostrar notebook/stats
    
const lunaShowNotebookBTN = document.getElementById('lunaShowNotebookBTN') 
const lunanotebook = document.getElementById('lunanotebook') 
const lunaSTATS = document.querySelector('#lunaSTATS') 
let lunaShowNB = showNotebook(lunaShowNotebook, lunaSTATS, lunaShowNotebookBTN, lunanotebook)
let lunaShowPP = showPrices(lunaShowPrices, lunaSTATS, lunaShowNotebookBTN, lunanotebook)

// bnb - ocultar y mostrar notebook/stats
    
const bnbShowNotebookBTN = document.getElementById('bnbShowNotebookBTN') 
const bnbnotebook = document.getElementById('bnbnotebook') 
const bnbSTATS = document.querySelector('#bnbSTATS') 
let bnbShowNB = showNotebook(bnbShowNotebook, bnbSTATS, bnbShowNotebookBTN, bnbnotebook)
let bnbShowPP = showPrices(bnbShowPrices, bnbSTATS, bnbShowNotebookBTN, bnbnotebook)

// dot - ocultar y mostrar notebook/stats
    
const dotShowNotebookBTN = document.getElementById('dotShowNotebookBTN') 
const dotnotebook = document.getElementById('dotnotebook') 
const dotSTATS = document.querySelector('#dotSTATS') 
let dotShowNB = showNotebook(dotShowNotebook, dotSTATS, dotShowNotebookBTN, dotnotebook)
let dotShowPP = showPrices(dotShowPrices, dotSTATS, dotShowNotebookBTN, dotnotebook)





// BOTONES ADD

const form = document.getElementById('form') 
const addCoinButton = document.getElementById('addCoinButton') 







form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);
    let precioEther = ether[0]
    var f = new Date();
    let holdEth = {myHold: formValues.get("myHold")};  

    form.reset();

    localStorage.setItem("ethHold", JSON.stringify(holdEth));

    myHold.push(holdEth); 
    

    let myHoldUSD = holdEth.myHold * precioEther;
    myHold.push(myHoldUSD)

    localStorage.setItem("ethHold", JSON.stringify(myHold));



$("#ethHoldAdded").append( `
    <span class="notes" id="ethTextAdded">${holdEth.myHold} ETH ♦ $${(holdEth.myHold * precioEther).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
`)    


localStorage.setItem("miholdText", JSON.stringify($("#ethTextAdded").html()));



$("#ethTextAdded").html(localStorage.getItem("miholdText"));
     
});


setTimeout(function() {
    
let miholdText = localStorage.getItem("miholdText");

console.log(miholdText)


$("#localstorage").append( `
<span class="notes"> ${miholdText}</span>
`)   
}, 100)