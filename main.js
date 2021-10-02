
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
const card = document.querySelector('.card')

darkmodebutton.addEventListener('click', function () {
   if (bgdark.classList.contains('bg-dark') && card.classList.contains('card-dark')) {
       bgdark.classList.remove('bg-dark');
       card.classList.remove('card-dark');

    //    for (i = 0; i < 4; i++) {
    //    card.classList.remove('card-dark');
    // }
    } else {
        bgdark.classList.add('bg-dark');
        card.classList.add('card-dark');

    //     for (i = 0; i < 4; i++) {
    //     card.classList.add('card-dark');
    // }
    }

});


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

setTimeout(function() {
    precioEthereum = document.getElementById("precioEthereum2")
    
    document.getElementById("precioEthereum2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let ethPrice = data.RAW.PRICE;
        currencies.push(ethPrice)
          console.log(ethPrice)
        $("#precioEthereum2").append(`
        <span class="card-price"> <strong> $${ethPrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioEthereumMove")
        
        document.getElementById("precioEthereumMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let ethPrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(ethPrice)
              console.log(ethPrice)
            $("#precioEthereumMove").append(`
            <span class="card-price-move"> <strong> ${ethPrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioEthereumPercentage")
        
        document.getElementById("precioEthereumPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let ethPrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(ethPrice)
              console.log(ethPrice)
            $("#precioEthereumPercentage").append(`
            <span class="card-price-move"> <strong> ${ethPrice}%</strong> </span>
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

setTimeout(function() {
    precioEthereum = document.getElementById("precioBTC2")
    
    document.getElementById("precioBTC2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.RAW.PRICE;
        currencies.push(btcPrice)
          console.log(btcPrice)
        $("#precioBTC2").append(`
        <span class="card-price"> <strong> $${btcPrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioBTCMove")
        
        document.getElementById("precioBTCMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioBTCMove").append(`
            <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioBTCPercentage")
        
        document.getElementById("precioBTCPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioBTCPercentage").append(`
            <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
         `)
            
        });
        }, 10);
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
    precioEthereum = document.getElementById("precioADA2")
    
    document.getElementById("precioADA2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.RAW.PRICE;
        currencies.push(btcPrice)
          console.log(btcPrice)
        $("#precioADA2").append(`
        <span class="card-price"> <strong> $${btcPrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioADAMove")
        
        document.getElementById("precioADAMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioADAMove").append(`
            <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioADAPercentage")
        
        document.getElementById("precioADAPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioADAPercentage").append(`
            <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
         `)
            
        });
        }, 10);
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
    precioEthereum = document.getElementById("precioMATIC2")
    
    document.getElementById("precioMATIC2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.RAW.PRICE;
        currencies.push(btcPrice)
          console.log(btcPrice)
        $("#precioMATIC2").append(`
        <span class="card-price"> <strong> $${btcPrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioMATICMove")
        
        document.getElementById("precioMATICMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioMATICMove").append(`
            <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioMATICPercentage")
        
        document.getElementById("precioMATICPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioMATICPercentage").append(`
            <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
         `)
            
        });
        }, 10);

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



//USDT

setTimeout(function() {
    precioEthereum = document.getElementById("precioUSDT")
    
    document.getElementById("precioUSDT")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=USDT&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.RAW.PRICE;
        currencies.push(btcPrice)
          console.log(btcPrice)
        $("#precioUSDT").append(`
        <span class="card-price"> <strong> $${btcPrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioUSDTMove")
        
        document.getElementById("precioUSDTMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=USDT&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioUSDTMove").append(`
            <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioUSDTPercentage")
        
        document.getElementById("precioUSDTPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=USDT&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(btcPrice)
              console.log(btcPrice)
            $("#precioUSDTPercentage").append(`
            <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
         `)
            
        });
        }, 10);
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
        <p class="subtit col-lg-2" id="txName"> ${moneda.nombre}</p>
        <p class="subtit col-lg-2" id="txInversion"> ${"U$D" + (moneda.precio * moneda.holding)}</p>
        <p class="subtit col-lg-2" id="txPrecio"> ${"U$D" + moneda.precio} </p>
        <p class="subtit col-lg-2" id="txHoldings"> ${moneda.holding + " " + moneda.nombre} </p>
        <p class="subtit col-lg-2" id="txArs"> ${"AR$"+ (moneda.pesosHolding)} </p>
        </div>
        
            `);
            
            // let txName = document.getElementById('txName').value;
            // let newTx = {txName: txName, txInversion: document.getElementById('txInversion').value, txPrecio: document.getElementById('txPrecio').value, txHoldings: document.getElementById('txHoldings').value, txArs: document.getElementById('txArs').value}

            // const txs = []
            // console.log(newTx)
            // txs.push(newTx) ; 

            // localStorage.setItem("txs", JSON.stringify(txs));
    
});


fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?country=England", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "07d5d6dac9mshf67f3f2be0a22b8p16c05djsnac5f98bc055c"
	}
})
.then(response => response.json())
.then (data => {

        console.log(data)
});