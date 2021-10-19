

let ethHold = JSON.parse(localStorage.getItem("ethHold"))|| []
let btcHold = JSON.parse(localStorage.getItem("btcHold"))|| []
let adaHold = JSON.parse(localStorage.getItem("adaHold"))|| []
let maticHold = JSON.parse(localStorage.getItem("maticHold"))|| []
let lunaHold = JSON.parse(localStorage.getItem("lunaHold"))|| []
let cakeHold = JSON.parse(localStorage.getItem("cakeHold"))|| []
let solHold = JSON.parse(localStorage.getItem("solHold"))|| []
let alcxHold = JSON.parse(localStorage.getItem("alcxHold"))|| []
let bnbHold = JSON.parse(localStorage.getItem("bnbHold"))|| []
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
//ETH
const form = document.getElementById('form') 
const addCoinButton = document.getElementById('addCoinButton') 

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);
    let precioEther = ether[0]
    var f = new Date();
    let holdEth = {
        myHold: formValues.get("myHold"),
        precioUSD: formValues.get("myHold") * precioEther,
    };

    form.reset();

    localStorage.setItem("ethHold", JSON.stringify(holdEth));

    myHold.push(holdEth); 
    
    localStorage.setItem("ethHold", JSON.stringify(myHold));



$("#ethHoldAdded").append( `
    <span class="notes" id="ethTextAdded">${holdEth.myHold} ETH ♦ $${(holdEth.myHold * precioEther).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
`)    


localStorage.setItem("miholdText", JSON.stringify($("#ethTextAdded").html()));
$("#ethTextAdded").html(localStorage.getItem("miholdText"));
     
});


setTimeout(function() {
        
    var f = new Date();
    for(let x = 0; x < ethHold.length; x++){
        $("#ethHoldAdded").append( `
                <div class="notes" id="ethTextAdded">${ethHold[x].myHold} ETH ♦ $${ethHold[x].precioUSD.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
        `)  
    }
    
    }, 100)


    
//btc
const formbtc = document.getElementById('formbtc') 
const addCoinButtonbtc = document.getElementById('addCoinButtonbtc') 

formbtc.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);
    let preciobtc = bitcoin[0]
    var f = new Date();
    let holdbtc = {
        myHoldbtc: formValues.get("myHoldbtc"),
        precioUSDbtc: formValues.get("myHoldbtc") * precioBitcoin,
    };

    formbtc.reset();

    localStorage.setItem("btcHold", JSON.stringify(holdbtc));

    myHoldbtc.push(holdbtc); 

    localStorage.setItem("btcHold", JSON.stringify(myHoldbtc));



$("#btcHoldAdded").append( `
    <span class="notes" id="btcTextAdded">${holdbtc.myHoldbtc} BTC ♦ $${(holdbtc.myHoldbtc * preciobtc).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
`)    


localStorage.setItem("miholdTextbtc", JSON.stringify($("#btcTextAdded").html()));
$("#btcTextAdded").html(localStorage.getItem("miholdTextbtc"));
     
});


setTimeout(function() {
        
    var f = new Date();
    for(let x = 0; x < btcHold.length; x++){
        $("#btcHoldAdded").append( `
                <div class="notes" id="btcTextAdded">${btcHold[x].myHoldbtc} btc ♦ $${btcHold[x].precioUSDbtc.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
        `)  
    }
    
    }, 100)



    //ada
const formada = document.getElementById('formada') 
const addCoinButtonada = document.getElementById('addCoinButtonada') 

formada.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);
    let precioada = cardano[0]
    var f = new Date();
    let holdada = {
        myHoldada: formValues.get("myHoldada"),
        precioUSDada: formValues.get("myHoldada") * precioada,
    };

    formada.reset();

    localStorage.setItem("adaHold", JSON.stringify(holdada));

    myHoldada.push(holdada); 

    localStorage.setItem("adaHold", JSON.stringify(myHoldada));



$("#adaHoldAdded").append( `
    <span class="notes" id="adaTextAdded">${holdada.myHoldada} ADA ♦ $${(holdada.myHoldada * precioada).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
`)    


localStorage.setItem("miholdTextada", JSON.stringify($("#adaTextAdded").html()));
$("#adaTextAdded").html(localStorage.getItem("miholdTextada"));
     
});


setTimeout(function() {
        
    var f = new Date();
    for(let x = 0; x < adaHold.length; x++){
        $("#adaHoldAdded").append( `
                <div class="notes" id="adaTextAdded">${adaHold[x].myHoldada} ADA ♦ $${adaHold[x].precioUSDada.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
        `)  
    }
    
    }, 100)


        //luna
        const formluna = document.getElementById('formluna') 
        const addCoinButtonluna = document.getElementById('addCoinButtonluna') 
        
        formluna.addEventListener("submit", function(e) {
            e.preventDefault();
            let formValues = new FormData(e.target);
            let precioluna = luna[0];
            var f = new Date();
            let holdluna = {
                myHoldluna: formValues.get("myHoldluna"),
                precioUSDluna: formValues.get("myHoldluna") * precioluna,
            };
        
            formluna.reset();
        
            localStorage.setItem("lunaHold", JSON.stringify(holdluna));
        
            myHoldluna.push(holdluna); 
        
            localStorage.setItem("lunaHold", JSON.stringify(myHoldluna));
        
        
        
        $("#lunaHoldAdded").append( `
            <span class="notes" id="lunaTextAdded">${holdluna.myHoldluna} luna ♦ $${(holdluna.myHoldluna * precioluna).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
        `)    
        
        
        localStorage.setItem("miholdTextluna", JSON.stringify($("#lunaTextAdded").html()));
        $("#lunaTextAdded").html(localStorage.getItem("miholdTextluna"));
             
        });
        
        
        setTimeout(function() {
                
            var f = new Date();
            for(let x = 0; x < lunaHold.length; x++){
                $("#lunaHoldAdded").append( `
                        <div class="notes" id="lunaTextAdded">${lunaHold[x].myHoldluna} luna ♦ $${lunaHold[x].precioUSDluna.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
                `)  
            }
            
            }, 100)


                //sol
    const formsol = document.getElementById('formsol') 
    const addCoinButtonsol = document.getElementById('addCoinButtonsol') 
    
    formsol.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let preciosol = solana[0]
        var f = new Date();
        let holdsol = {
            myHoldsol: formValues.get("myHoldsol"),
            precioUSDsol: formValues.get("myHoldsol") * preciosol,
        };
    
        formsol.reset();
    
        localStorage.setItem("solHold", JSON.stringify(holdsol));
    
        myHoldsol.push(holdsol); 
    
        localStorage.setItem("solHold", JSON.stringify(myHoldsol));
    
    
    
    $("#solHoldAdded").append( `
        <span class="notes" id="solTextAdded">${holdsol.myHoldsol} sol ♦ $${(holdsol.myHoldsol * preciosol).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextsol", JSON.stringify($("#solTextAdded").html()));
    $("#solTextAdded").html(localStorage.getItem("miholdTextsol"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < solHold.length; x++){
            $("#solHoldAdded").append( `
                    <div class="notes" id="solTextAdded">${solHold[x].myHoldsol} sol ♦ $${solHold[x].precioUSDsol.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)


        //cake
    const formcake = document.getElementById('formcake') 
    const addCoinButtoncake = document.getElementById('addCoinButtoncake') 
    
    formcake.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let preciocake = cake[0]
        var f = new Date();
        let holdcake = {
            myHoldcake: formValues.get("myHoldcake"),
            precioUSDcake: formValues.get("myHoldcake") * preciocake,
        };
    
        formcake.reset();
    
        localStorage.setItem("cakeHold", JSON.stringify(holdcake));
    
        myHoldcake.push(holdcake); 
    
        localStorage.setItem("cakeHold", JSON.stringify(myHoldcake));
    
    
    
    $("#cakeHoldAdded").append( `
        <span class="notes" id="cakeTextAdded">${holdcake.myHoldcake} cake ♦ $${(holdcake.myHoldcake * preciocake).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextcake", JSON.stringify($("#cakeTextAdded").html()));
    $("#cakeTextAdded").html(localStorage.getItem("miholdTextcake"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < cakeHold.length; x++){
            $("#cakeHoldAdded").append( `
                    <div class="notes" id="cakeTextAdded">${cakeHold[x].myHoldcake} cake ♦ $${cakeHold[x].precioUSDcake.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)

            //alcx
    const formalcx = document.getElementById('formalcx') 
    const addCoinButtonalcx = document.getElementById('addCoinButtonalcx') 
    
    formalcx.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let precioalcx = alchemix[0]
        var f = new Date();
        let holdalcx = {
            myHoldalcx: formValues.get("myHoldalcx"),
            precioUSDalcx: formValues.get("myHoldalcx") * precioalcx,
        };
    
        formalcx.reset();
    
        localStorage.setItem("alcxHold", JSON.stringify(holdalcx));
    
        myHoldalcx.push(holdalcx); 
    
        localStorage.setItem("alcxHold", JSON.stringify(myHoldalcx));
    
    
    
    $("#alcxHoldAdded").append( `
        <span class="notes" id="alcxTextAdded">${holdalcx.myHoldalcx} alcx ♦ $${(holdalcx.myHoldalcx * precioalcx).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextalcx", JSON.stringify($("#alcxTextAdded").html()));
    $("#alcxTextAdded").html(localStorage.getItem("miholdTextalcx"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < alcxHold.length; x++){
            $("#alcxHoldAdded").append( `
                    <div class="notes" id="alcxTextAdded">${alcxHold[x].myHoldalcx} alcx ♦ $${alcxHold[x].precioUSDalcx.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)


            //bnb
    const formbnb = document.getElementById('formbnb') 
    const addCoinButtonbnb = document.getElementById('addCoinButtonbnb') 
    
    formbnb.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let preciobnb = bnb[0]
        var f = new Date();
        let holdbnb = {
            myHoldbnb: formValues.get("myHoldbnb"),
            precioUSDbnb: formValues.get("myHoldbnb") * preciobnb,
        };
    
        formbnb.reset();
    
        localStorage.setItem("bnbHold", JSON.stringify(holdbnb));
    
        myHoldbnb.push(holdbnb); 
    
        localStorage.setItem("bnbHold", JSON.stringify(myHoldbnb));
    
    
    
    $("#bnbHoldAdded").append( `
        <span class="notes" id="bnbTextAdded">${holdbnb.myHoldbnb} bnb ♦ $${(holdbnb.myHoldbnb * preciobnb).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextbnb", JSON.stringify($("#bnbTextAdded").html()));
    $("#bnbTextAdded").html(localStorage.getItem("miholdTextbnb"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < bnbHold.length; x++){
            $("#bnbHoldAdded").append( `
                    <div class="notes" id="bnbTextAdded">${bnbHold[x].myHoldbnb} bnb ♦ $${bnbHold[x].precioUSDbnb.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)


            //dot
    const formdot = document.getElementById('formdot') 
    const addCoinButtondot = document.getElementById('addCoinButtondot') 
    
    formdot.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let preciodot = polkadot[0]
        var f = new Date();
        let holddot = {
            myHolddot: formValues.get("myHolddot"),
            precioUSDdot: formValues.get("myHolddot") * preciodot,
        };
    
        formdot.reset();
    
        localStorage.setItem("dotHold", JSON.stringify(holddot));
    
        myHolddot.push(holddot); 
    
        localStorage.setItem("dotHold", JSON.stringify(myHolddot));
    
    
    
    $("#dotHoldAdded").append( `
        <span class="notes" id="dotTextAdded">${holddot.myHolddot} dot ♦ $${(holddot.myHolddot * preciodot).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextdot", JSON.stringify($("#dotTextAdded").html()));
    $("#dotTextAdded").html(localStorage.getItem("miholdTextdot"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < dotHold.length; x++){
            $("#dotHoldAdded").append( `
                    <div class="notes" id="dotTextAdded">${dotHold[x].myHolddot} dot ♦ $${dotHold[x].precioUSDdot.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)

            //matic
    const formmatic = document.getElementById('formmatic') 
    const addCoinButtonmatic = document.getElementById('addCoinButtonmatic') 
    
    formmatic.addEventListener("submit", function(e) {
        e.preventDefault();
        let formValues = new FormData(e.target);
        let preciomatic = matic[0]
        var f = new Date();
        let holdmatic = {
            myHoldmatic: formValues.get("myHoldmatic"),
            precioUSDmatic: formValues.get("myHoldmatic") * preciomatic,
        };
    
        formmatic.reset();
    
        localStorage.setItem("maticHold", JSON.stringify(holdmatic));
    
        myHoldmatic.push(holdmatic); 
    
        localStorage.setItem("maticHold", JSON.stringify(myHoldmatic));
    
    
    
    $("#maticHoldAdded").append( `
        <span class="notes" id="maticTextAdded">${holdmatic.myHoldmatic} MATIC ♦ $${(holdmatic.myHoldmatic * preciomatic).toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</span>
    `)    
    
    
    localStorage.setItem("miholdTextmatic", JSON.stringify($("#maticTextAdded").html()));
    $("#maticTextAdded").html(localStorage.getItem("miholdTextmatic"));
         
    });
    
    
    setTimeout(function() {
            
        var f = new Date();
        for(let x = 0; x < maticHold.length; x++){
            $("#maticHoldAdded").append( `
                    <div class="notes" id="maticTextAdded">${maticHold[x].myHoldmatic} MATIC ♦ $${maticHold[x].precioUSDmatic.toFixed(2)} ♦ ${f.getDate() + "/"+ (f.getMonth() + 1) + "/" +f.getFullYear()}</div>
            `)  
        }
        
        }, 100)