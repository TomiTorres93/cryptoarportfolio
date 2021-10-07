
const currencies = []

setTimeout(function() {
let precioDOLAR = currencies[4];
let usdHolding = holding * precio;
let pesosHolding = usdHolding * precioDOLAR;

const moneda = new Moneda (nombre, precio, holding, usdHolding, pesosHolding);

console.log(currencies)
}, 700);
console.log(currencies)
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
const ethcard = document.querySelector('.ethcard')
const btccard = document.querySelector('.btccard')
const adacard = document.querySelector('.adacard')
const maticcard = document.querySelector('.maticcard')
const cakecard = document.querySelector('.cakecard')
const solcard = document.querySelector('.solcard')
const bnbcard = document.querySelector('.bnbcard')
const lunacard = document.querySelector('.lunacard')
const dotcard = document.querySelector('.dotcard')
const alcxcard = document.querySelector('.alcxcard')
const spellcard = document.querySelector('.spellcard')
const thetacard = document.querySelector('.thetacard')
const aavecard = document.querySelector('.aavecard')
const epscard = document.querySelector('.epscard')
const celocard = document.querySelector('.celocard')
const raycard = document.querySelector('.raycard')


darkmodebutton.addEventListener('click', function () {
    bgdark.classList.toggle('bg-dark')
});


darkmodebutton.addEventListener('click', function () {
  ethcard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  btccard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  adacard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  maticcard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  solcard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  cakecard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  bnbcard.classList.toggle('card-dark')
});


darkmodebutton.addEventListener('click', function () {
  lunacard.classList.toggle('card-dark')
});


darkmodebutton.addEventListener('click', function () {
  dotcard.classList.toggle('card-dark')
});


darkmodebutton.addEventListener('click', function () {
  alcxcard.classList.toggle('card-dark')
});


darkmodebutton.addEventListener('click', function () {
  spellcard.classList.toggle('card-dark')
});


darkmodebutton.addEventListener('click', function () {
  thetacard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  aavecard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  epscard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  celocard.classList.toggle('card-dark')
});

darkmodebutton.addEventListener('click', function () {
  raycard.classList.toggle('card-dark')
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
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
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



//SOL

setTimeout(function() {
    precioEthereum = document.getElementById("precioSOL")
    
    document.getElementById("precioSOL")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let cakePrice = data.RAW.PRICE;
        currencies.push(cakePrice)
          console.log(cakePrice)
        $("#precioSOL").append(`
        <span class="card-price"> <strong> $${cakePrice}</strong> </span>
     `)
        
    });
    }, 10);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioSOLMove")
        
        document.getElementById("precioSOLMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let cakePrice = data.DISPLAY.CHANGE24HOUR;
            currencies.push(cakePrice)
              console.log(cakePrice)
            $("#precioSOLMove").append(`
            <span class="card-price-move"> <strong> ${cakePrice}</strong> </span>
         `)
            
        });
        }, 10);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioSOLPercentage")
        
        document.getElementById("precioSOLPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let cakePrice = data.DISPLAY.CHANGEPCT24HOUR;
            currencies.push(cakePrice)
              console.log(cakePrice)
            $("#precioSOLPercentage").append(`
            <span class="card-price-move"> <strong> ${cakePrice}%</strong> </span>
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


        setTimeout(function() {
          precioGasEthereum = document.getElementById("precioGAS")
          
          document.getElementById("precioGAS")
          fetch('https://ethgas.watch/api/gas')
          .then(response => response.json())
          .then(data => {
              let ethgasPrice = data.fast.gwei;
              currencies.push(ethgasPrice)
                console.log(ethgasPrice)
              $("#precioGAS").append(`
              <span class="topbartext"> <strong> ${ethgasPrice} GWEI</strong> </span>           `)
              
          });
          }, 10);
//CAKE

setTimeout(function() {
  precioEthereum = document.getElementById("precioCAKE")
  
  document.getElementById("precioCAKE")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.CAKE.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioCAKE").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioCAKEMove")
      
      document.getElementById("precioCAKEMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.CAKE.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioCAKEMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioCAKEPercentage")
      
      document.getElementById("precioCAKEPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.CAKE.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioCAKEPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);

//BNB

setTimeout(function() {
  precioEthereum = document.getElementById("precioBNB")
  
  document.getElementById("precioBNB")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.BNB.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioBNB").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioBNBMove")
      
      document.getElementById("precioBNBMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.BNB.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioBNBMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioBNBPercentage")
      
      document.getElementById("precioBNBPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.BNB.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioBNBPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);

 //LUNA

setTimeout(function() {
  precioEthereum = document.getElementById("precioLUNA")
  
  document.getElementById("precioLUNA")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.LUNA.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioLUNA").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioLUNAMove")
      
      document.getElementById("precioLUNAMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.LUNA.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioLUNAMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioLUNAPercentage")
      
      document.getElementById("precioLUNAPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.LUNA.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioLUNAPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);     

 //DOT

 setTimeout(function() {
  precioEthereum = document.getElementById("precioDOT")
  
  document.getElementById("precioDOT")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.DOT.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioDOT").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioDOTMove")
      
      document.getElementById("precioDOTMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.DOT.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioDOTMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioDOTPercentage")
      
      document.getElementById("precioDOTPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.DOT.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioDOTPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);     
                     
 //ALCX

 setTimeout(function() {
  precioEthereum = document.getElementById("precioALCX")
  
  document.getElementById("precioALCX")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.ALCX.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioALCX").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioALCXMove")
      
      document.getElementById("precioALCXMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.ALCX.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioALCXMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioALCXPercentage")
      
      document.getElementById("precioALCXPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.ALCX.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioALCXPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);     

 //SPELL

 setTimeout(function() {
  precioEthereum = document.getElementById("precioSPELL")
  
  document.getElementById("precioSPELL")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SPELL&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.SPELL.USD.PRICE.toFixed(4);
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioSPELL").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioSPELLMove")
      
      document.getElementById("precioSPELLMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SPELL&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.SPELL.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioSPELLMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioSPELLPercentage")
      
      document.getElementById("precioSPELLPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SPELL&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.SPELL.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioSPELLPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);   
      
 //THETA

 setTimeout(function() {
  precioEthereum = document.getElementById("precioTHETA")
  
  document.getElementById("precioTHETA")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=THETA&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.THETA.USD.PRICE;
      currencies.push(btcPrice)
        console.log(btcPrice)
      $("#precioTHETA").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioTHETAMove")
      
      document.getElementById("precioTHETAMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=THETA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.THETA.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioTHETAMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioTHETAPercentage")
      
      document.getElementById("precioTHETAPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=THETA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.THETA.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
            console.log(btcPrice)
          $("#precioTHETAPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);   
      

 //AAVE

 setTimeout(function() {
  precioEthereum = document.getElementById("precioAAVE")
  
  document.getElementById("precioAAVE")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AAVE&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.AAVE.USD.PRICE;
      currencies.push(btcPrice)
      $("#precioAAVE").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioAAVEMove")
      
      document.getElementById("precioAAVEMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AAVE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.AAVE.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
          $("#precioAAVEMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioAAVEPercentage")
      
      document.getElementById("precioAAVEPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AAVE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.AAVE.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
          $("#precioAAVEPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);   
      

 //EPS

 setTimeout(function() {
  precioEthereum = document.getElementById("precioEPS")
  
  document.getElementById("precioEPS")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ELLIP&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.EPS.USD.PRICE;
      currencies.push(btcPrice)
      $("#precioEPS").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioEPSMove")
      
      document.getElementById("precioEPSMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ELLIP&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.EPS.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
          $("#precioEPSMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioEPSPercentage")
      
      document.getElementById("precioEPSPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ELLIP&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.EPS.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
          $("#precioEPSPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);   
      
 //CELO

 setTimeout(function() {
  precioEthereum = document.getElementById("precioCELO")
  
  document.getElementById("precioCELO")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CELO&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.CELO.USD.PRICE;
      currencies.push(btcPrice)
      $("#precioCELO").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioCELOMove")
      
      document.getElementById("precioCELOMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CELO&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.CELO.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
          $("#precioCELOMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioCELOPercentage")
      
      document.getElementById("precioCELOPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CELO&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.CELO.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
          $("#precioCELOPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 10);   
      
 //RAY

 setTimeout(function() {
  precioEthereum = document.getElementById("precioRAY")
  
  document.getElementById("precioRAY")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=RAY&tsyms=USD,EUR')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.RAY.USD.PRICE;
      currencies.push(btcPrice)
      $("#precioRAY").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 10);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioRAYMove")
      
      document.getElementById("precioRAYMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=RAY&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.RAY.USD.CHANGE24HOUR;
          currencies.push(btcPrice)
          $("#precioRAYMove").append(`
          <span class="card-price-move"> <strong> ${btcPrice}</strong> </span>
       `)
          
      });
      }, 10);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioRAYPercentage")
      
      document.getElementById("precioRAYPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=RAY&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let btcPrice = data.DISPLAY.RAY.USD.CHANGEPCT24HOUR;
          currencies.push(btcPrice)
          $("#precioRAYPercentage").append(`
          <span class="card-price-move"> <strong> ${btcPrice}%</strong> </span>
       `)
          
      });
      }, 15);   
      








////////////////////////////////////////
////////////////////////////////////////


// BOTONES ADD

const form = document.getElementById('form') 
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


