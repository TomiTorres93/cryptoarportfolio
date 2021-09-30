
const currencies = []
setTimeout(function() {
let precioDOLAR = currencies[4];
let usdHolding = holding * precio;
let pesosHolding = usdHolding * precioDOLAR;

const moneda = new Moneda (nombre, precio, holding, usdHolding, pesosHolding);


console.log(currencies[4])
}, 600);
//ANIMACIONES
$(() => {
    $("#p1").fadeOut(500)
    $("#p1").fadeIn(500)

    $("#darkmodebutton").click(() => {
    $("#p1").fadeOut(500)
    $("#p1").fadeIn(500)
        })

})

// DARKMODE 

const bgdark = document.getElementById('bgdark') 

darkmodebutton.addEventListener('click', function () {
   if (bgdark.classList.contains('bg-dark')) {
       bgdark.classList.remove('bg-dark');
    } else {
        bgdark.classList.add('bg-dark')
    }}
);


// COTIZACIONES
//ETH 
setTimeout(function() {
precioEthereum = document.getElementById("precioEthereum")

document.getElementById("precioEthereum")
fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let ethPrice = data.USD;
    currencies.push(ethPrice)
      console.log(ethPrice)
    $("#precioEthereum").append(`
    <span class="topbartext"> <strong> ${ethPrice}</strong> </span>
 `)
    
});
}, 10);

//BTC 
setTimeout(function() {

precioBitcoin = document.getElementById("precioBitcoin")

document.getElementById("precioBitcoin")
fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let btcPrice = data.USD;
    currencies.push(btcPrice)
    console.log(btcPrice)
    $("#precioBitcoin").append(`
    <span class="topbartext"> <strong> ${btcPrice}</strong> </span>
 `)
});
}, 100);
//ADA 
setTimeout(function() {
precioADA = document.getElementById("precioADA")

document.getElementById("precioADA")
fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let cardanoPrice = data.USD;
    currencies.push(cardanoPrice)
    console.log(cardanoPrice)
    $("#precioADA").append(`
    <span class="topbartext"> <strong> ${cardanoPrice}</strong> </span>
 `)
});}, 150);
setTimeout(function() {
//MATIC
precioMATIC = document.getElementById("precioMATIC")
document.getElementById("precioMATIC")
fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then (data => {
    let maticPrice = data.USD;
    currencies.push(maticPrice)
    console.log(maticPrice)
    $("#precioMATIC").append(`
    <span class="topbartext"> <strong> ${maticPrice}</strong> </span>
 `) 
});}, 200);

setTimeout(function() {
    //DOLAR
    precioDOLAR = document.getElementById("precioDOLAR")
    document.getElementById("precioDOLAR")
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then (data => {
        let precioDOLAR = data.blue;
        currencies.push(precioDOLAR)
        console.log(precioDOLAR)
        $("#precioDOLAR").append(`
        <span class="topbartext"> <strong> $${precioDOLAR}</strong> </span>
     `) 
    } );}, 250);

////////////////////////////////////////
////////////////////////////////////////


// BOTONES ADD

  
const addCoinButton = document.getElementById('addCoinButton') 
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);

     
    let dolarblue = currencies[4];
    console.log(dolarblue);


    let moneda = {nombre: formValues.get("nombre"), precio: formValues.get("precio"), holding: formValues.get("holding"), usdHolding: parseInt(formValues.get("holding") *formValues.get("precio")), pesosHolding: parseFloat(parseInt(formValues.get("holding") *formValues.get("precio") *dolarblue) )};    
    form.reset();
    const arrMonedas = []
    arrMonedas.push(moneda) ; 
    
      
    console.log(moneda);
    localStorage.setItem("txs", JSON.stringify(arrMonedas));




     $("#nuevaMoneda").append( `
        
        <div class="row2">
        <p class="subtit" id="txName"> ${moneda.nombre}</p>
        <p class="subtit" id="txInversion"> ${"U$D" + (moneda.precio * moneda.holding)}</p>
        <p class="subtit" id="txPrecio"> ${"U$D" + moneda.precio} </p>
        <p class="subtit" id="txHoldings"> ${moneda.holding + " " + moneda.nombre} </p>
        <p class="subtit" id="txArs"> ${"AR$"+ (moneda.pesosHolding)} </p>
        </div>
        
            `);
            
            // let txName = document.getElementById('txName').value;
            // let newTx = {txName: txName, txInversion: document.getElementById('txInversion').value, txPrecio: document.getElementById('txPrecio').value, txHoldings: document.getElementById('txHoldings').value, txArs: document.getElementById('txArs').value}

            // const txs = []
            // console.log(newTx)
            // txs.push(newTx) ; 

            // localStorage.setItem("txs", JSON.stringify(txs));
    
});
