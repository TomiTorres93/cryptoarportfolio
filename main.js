const dolarCot = []
const ethgas = []
const currencies = []
const currenciesPrice24 = []
const currenciesPCT = []


const ether = []
const bitcoin = []
const cardano = []
const matic = []
const solana = []
const cake = []
const bnb = []
const luna = []
const polkadot = []
const alchemix = []

const myHold = []
const ethNotes = []


// COTIZACIONES


//ETH 
setTimeout(function() {
precioEthereum = document.getElementById("precioEthereum")

document.getElementById("precioEthereum")
fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let ethPrice = data.USD;
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
        ether.push(ethPrice)
          console.log(ethPrice)
        $("#precioEthereum2").append(`
        <span class="card-price"> <strong> $${ethPrice}</strong> </span>
     `)
        
    });
    
  
        precioEthereum = document.getElementById("precioEthereumMove")
        
        document.getElementById("precioEthereumMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let ethPrice24 = data.DISPLAY.CHANGE24HOUR;
            currenciesPrice24.push(ethPrice24)
            ether.push(ethPrice24)
              console.log(ethPrice24)
            $("#precioEthereumMove").append(`
            <span class="card-price-move"> <strong> ${ethPrice24}</strong> </span>
         `)
            
        });
    
        
        precioEthereum = document.getElementById("precioEthereumPercentage")
        
        document.getElementById("precioEthereumPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ETH&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let ethPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
            currenciesPCT.push(ethPricePCT)
            ether.push(ethPricePCT)
              console.log(ethPricePCT)
            $("#precioEthereumPercentage").append(`
            <span class="card-price-move"> <strong> ${ethPricePCT}%</strong> </span>
         `)
            
        }, 10);
        });


        

        

//BTC 
setTimeout(function() {
  precioEthereum = document.getElementById("precioBTC2")
  
  document.getElementById("precioBTC2")
  fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.PRICE;
      currencies.push(btcPrice)
      bitcoin.push(btcPrice)

     $("#precioBTC2").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 50);
setTimeout(function() {

precioBitcoin = document.getElementById("precioBitcoin")

document.getElementById("precioBitcoin")
fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let btcPrice = data.USD;
    $("#precioBitcoin").append(`
    <span class="topbartext"> <strong> ${btcPrice}</strong> </span>
 `)
});
}, 50);



    setTimeout(function() {
        precioEthereum = document.getElementById("precioBTCMove")
        
        document.getElementById("precioBTCMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPrice24 = data.DISPLAY.CHANGE24HOUR;
            currenciesPrice24.push(btcPrice24)
            bitcoin.push(btcPrice24)

            $("#precioBTCMove").append(`
            <span class="card-price-move"> <strong> ${btcPrice24}</strong> </span>
         `)
            
        });
        }, 50);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioBTCPercentage")
        
        document.getElementById("precioBTCPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let btcPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
            currenciesPCT.push(btcPricePCT)
            bitcoin.push(btcPricePCT)
            $("#precioBTCPercentage").append(`
            <span class="card-price-move"> <strong> ${btcPricePCT}%</strong> </span>
         `)
            
        });
        }, 50);
//ADA 
setTimeout(function() {
precioADA = document.getElementById("precioADA")

document.getElementById("precioADA")
fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then(data => {
    let cardanoPrice = data.USD;
    $("#precioADA").append(`
    <span class="topbartext"> <strong> ${cardanoPrice}</strong> </span>
 `)
});}, 20);


setTimeout(function() {
    precioEthereum = document.getElementById("precioADA2")
    
    document.getElementById("precioADA2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let adaPrice = data.RAW.PRICE;
        currencies.push(adaPrice)
        cardano.push(adaPrice)

        $("#precioADA2").append(`
        <span class="card-price"> <strong> $${adaPrice}</strong> </span>
     `)
        
    });
    }, 22);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioADAMove")
        
        document.getElementById("precioADAMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let adaPrice24 = data.DISPLAY.CHANGE24HOUR;
            currenciesPrice24.push(adaPrice24)
            cardano.push(adaPrice24)

            $("#precioADAMove").append(`
            <span class="card-price-move"> <strong> ${adaPrice24}</strong> </span>
         `)
            
        });
        }, 23);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioADAPercentage")
        
        document.getElementById("precioADAPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=ADA&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let adaPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
            currenciesPCT.push(adaPricePCT)
            cardano.push(adaPricePCT)

            $("#precioADAPercentage").append(`
            <span class="card-price-move"> <strong> ${adaPricePCT}%</strong> </span>
         `)
            
        });
        }, 24);

setTimeout(function() {
//MATIC
precioMATIC = document.getElementById("precioMATIC")
document.getElementById("precioMATIC")
fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD,JPY,EUR')
.then(response => response.json())
.then (data => {
    let maticPrice = data.USD;
    $("#precioMATIC").append(`
    <span class="topbartext"> <strong> ${maticPrice}</strong> </span>
 `) 
});}, 25);

setTimeout(function() {
    precioEthereum = document.getElementById("precioMATIC2")
    
    document.getElementById("precioMATIC2")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let maticPrice = data.RAW.PRICE;
        currencies.push(maticPrice)
        matic.push(maticPrice)

        $("#precioMATIC2").append(`
        <span class="card-price"> <strong> $${maticPrice}</strong> </span>
     `)
        
    });
    }, 26);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioMATICMove")
        
        document.getElementById("precioMATICMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let maticPrice24 = data.DISPLAY.CHANGE24HOUR;
            currenciesPrice24.push(maticPrice24)
            matic.push(maticPrice24)

            $("#precioMATICMove").append(`
            <span class="card-price-move"> <strong> ${maticPrice24}</strong> </span>
         `)
            
        });
        }, 27);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioMATICPercentage")
        
        document.getElementById("precioMATICPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=MATIC&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let maticPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
            currenciesPCT.push(maticPricePCT)
            matic.push(maticPricePCT)

            $("#precioMATICPercentage").append(`
            <span class="card-price-move"> <strong> ${maticPricePCT}%</strong> </span>
         `)
            
        });
        }, 27);



//SOL

setTimeout(function() {
    precioEthereum = document.getElementById("precioSOL")
    
    document.getElementById("precioSOL")
    fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
    .then(response => response.json())
    .then(data => {
        let solPrice = data.RAW.PRICE;
        currencies.push(solPrice)
        solana.push(solPrice)

        $("#precioSOL").append(`
        <span class="card-price"> <strong> $${solPrice}</strong> </span>
     `)
        
    });
    }, 30);

    setTimeout(function() {
        precioEthereum = document.getElementById("precioSOLMove")
        
        document.getElementById("precioSOLMove")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let solPrice24 = data.DISPLAY.CHANGE24HOUR;
            currenciesPrice24.push(solPrice24)
            solana.push(solPrice24)

            $("#precioSOLMove").append(`
            <span class="card-price-move"> <strong> ${solPrice24}</strong> </span>
         `)
            
        });
        }, 31);

        
    setTimeout(function() {
        precioEthereum = document.getElementById("precioSOLPercentage")
        
        document.getElementById("precioSOLPercentage")
        fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=SOL&tsym=USD&e=Kraken')
        .then(response => response.json())
        .then(data => {
            let solPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
            currenciesPCT.push(solPricePCT)
            solana.push(solPricePCT)

            $("#precioSOLPercentage").append(`
            <span class="card-price-move"> <strong> ${solPricePCT}%</strong> </span>
         `)
            
        });
        }, 32);



//CAKE

setTimeout(function() {
  precioEthereum = document.getElementById("precioCAKE")
  
  document.getElementById("precioCAKE")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let btcPrice = data.RAW.CAKE.USD.PRICE;
      currencies.push(btcPrice)
      cake.push(btcPrice)

      $("#precioCAKE").append(`
      <span class="card-price"> <strong> $${btcPrice}</strong> </span>
   `)
      
  });
  }, 41);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioCAKEMove")
      
      document.getElementById("precioCAKEMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let cakePrice24 = data.DISPLAY.CAKE.USD.CHANGE24HOUR;
          currenciesPrice24.push(cakePrice24)
          cake.push(cakePrice24)

          $("#precioCAKEMove").append(`
          <span class="card-price-move"> <strong> ${cakePrice24}</strong> </span>
       `)
          
      });
      }, 42);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioCAKEPercentage")
      
      document.getElementById("precioCAKEPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let cakePricePCT = data.DISPLAY.CAKE.USD.CHANGEPCT24HOUR;
          currenciesPCT.push(cakePricePCT)
          cake.push(cakePricePCT)

          $("#precioCAKEPercentage").append(`
          <span class="card-price-move"> <strong> ${cakePricePCT}%</strong> </span>
       `)
          
      });
      }, 43);

//BNB

setTimeout(function() {
  precioEthereum = document.getElementById("precioBNB")
  
  document.getElementById("precioBNB")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let bnbPrice = data.RAW.BNB.USD.PRICE;
      currencies.push(bnbPrice)
      bnb.push(bnbPrice)

      $("#precioBNB").append(`
      <span class="card-price"> <strong> $${bnbPrice}</strong> </span>
   `)
      
  });
  }, 45);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioBNBMove")
      
      document.getElementById("precioBNBMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let bnbPrice24 = data.DISPLAY.BNB.USD.CHANGE24HOUR;
          currenciesPrice24.push(bnbPrice24)
          bnb.push(bnbPrice24)

          $("#precioBNBMove").append(`
          <span class="card-price-move"> <strong> ${bnbPrice24}</strong> </span>
       `)
          
      });
      }, 46);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioBNBPercentage")
      
      document.getElementById("precioBNBPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let bnbPricePCT = data.DISPLAY.BNB.USD.CHANGEPCT24HOUR;
          currenciesPCT.push(bnbPricePCT)
          bnb.push(bnbPricePCT)

          $("#precioBNBPercentage").append(`
          <span class="card-price-move"> <strong> ${bnbPricePCT}%</strong> </span>
       `)
          
      });
      }, 47);

 //LUNA

setTimeout(function() {
  precioEthereum = document.getElementById("precioLUNA")
  
  document.getElementById("precioLUNA")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let lunaPrice = data.RAW.LUNA.USD.PRICE;
      currencies.push(lunaPrice)
      luna.push(lunaPrice)

      $("#precioLUNA").append(`
      <span class="card-price"> <strong> $${lunaPrice}</strong> </span>
   `)
      
  });
  }, 50);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioLUNAMove")
      
      document.getElementById("precioLUNAMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let lunaPrice24 = data.DISPLAY.LUNA.USD.CHANGE24HOUR;
          currenciesPrice24.push(lunaPrice24)
          luna.push(lunaPrice24)

          $("#precioLUNAMove").append(`
          <span class="card-price-move"> <strong> ${lunaPrice24}</strong> </span>
       `)
          
      });
      }, 51);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioLUNAPercentage")
      
      document.getElementById("precioLUNAPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let lunaPricePCT = data.DISPLAY.LUNA.USD.CHANGEPCT24HOUR;
          currenciesPCT.push(lunaPricePCT)
          luna.push(lunaPricePCT)

          $("#precioLUNAPercentage").append(`
          <span class="card-price-move"> <strong> ${lunaPricePCT}%</strong> </span>
       `)
          
      });
      }, 52);     

 //DOT

 setTimeout(function() {
  precioEthereum = document.getElementById("precioDOT")
  
  document.getElementById("precioDOT")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let dotPrice = data.RAW.DOT.USD.PRICE;
      currencies.push(dotPrice)
      polkadot.push(dotPrice)

      $("#precioDOT").append(`
      <span class="card-price"> <strong> $${dotPrice}</strong> </span>
   `)
      
  });
  }, 55);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioDOTMove")
      
      document.getElementById("precioDOTMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let dotPrice24 = data.DISPLAY.DOT.USD.CHANGE24HOUR;
          currenciesPrice24.push(dotPrice24)
          polkadot.push(dotPrice24)

          $("#precioDOTMove").append(`
          <span class="card-price-move"> <strong> ${dotPrice24}</strong> </span>
       `)
          
      });
      }, 56);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioDOTPercentage")
      
      document.getElementById("precioDOTPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let dotPricePCT = data.DISPLAY.DOT.USD.CHANGEPCT24HOUR;
          currenciesPCT.push(dotPricePCT)
          polkadot.push(dotPricePCT)

          $("#precioDOTPercentage").append(`
          <span class="card-price-move"> <strong> ${dotPricePCT}%</strong> </span>
       `)
          
      });
      }, 57);     
                     
 //ALCX

 setTimeout(function() {
  precioEthereum = document.getElementById("precioALCX")
  
  document.getElementById("precioALCX")
  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EURn')
  .then(response => response.json())
  .then(data => {
      let alcxPrice = data.RAW.ALCX.USD.PRICE;
      currencies.push(alcxPrice)
      alchemix.push(alcxPrice)

      $("#precioALCX").append(`
      <span class="card-price"> <strong> $${alcxPrice}</strong> </span>
   `)
      
  });
  }, 60);

  setTimeout(function() {
      precioEthereum = document.getElementById("precioALCXMove")
      
      document.getElementById("precioALCXMove")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let alcxPrice24 = data.DISPLAY.ALCX.USD.CHANGE24HOUR;
          currenciesPrice24.push(alcxPrice24)
          alchemix.push(alcxPrice24)

          $("#precioALCXMove").append(`
          <span class="card-price-move"> <strong> ${alcxPrice24}</strong> </span>
       `)
          
      });
      }, 65);

      
  setTimeout(function() {
      precioEthereum = document.getElementById("precioALCXPercentage")
      
      document.getElementById("precioALCXPercentage")
      fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALCX&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
          let alcxPricePCT = data.DISPLAY.ALCX.USD.CHANGEPCT24HOUR;
          currenciesPCT.push(alcxPricePCT)
          alchemix.push(alcxPricePCT)

          $("#precioALCXPercentage").append(`
          <span class="card-price-move"> <strong> ${alcxPricePCT}%</strong> </span>
       `)
          
      });
      }, 70);     

 
      

      setTimeout(function() {
        //DOLAR
        precioDOLAR = document.getElementById("precioDOLAR")
        document.getElementById("precioDOLAR")
        fetch('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then (data => {
            let precioDOLAR = data.blue;
            dolarCot.push(precioDOLAR)
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
            $("#precioUSDT").append(`
            <span class="card-price"> <strong> $${btcPrice}</strong> </span>
         `)
            
        });
        }, 35);
        
        setTimeout(function() {
            precioEthereum = document.getElementById("precioUSDTMove")
            
            document.getElementById("precioUSDTMove")
            fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=USDT&tsym=USD&e=Kraken')
            .then(response => response.json())
            .then(data => {
                let usdtPrice24 = data.DISPLAY.CHANGE24HOUR;
                currenciesPrice24.push(usdtPrice24)
                $("#precioUSDTMove").append(`
                <span class="card-price-move"> <strong> ${usdtPrice24}</strong> </span>
             `)
                
            });
            }, 35);
    
            
        setTimeout(function() {
            precioEthereum = document.getElementById("precioUSDTPercentage")
            
            document.getElementById("precioUSDTPercentage")
            fetch('https://min-api.cryptocompare.com/data/generateAvg?fsym=USDT&tsym=USD&e=Kraken')
            .then(response => response.json())
            .then(data => {
                let usdtPricePCT = data.DISPLAY.CHANGEPCT24HOUR;
                currenciesPCT.push(usdtPricePCT)
                $("#precioUSDTPercentage").append(`
                <span class="card-price-move"> <strong> ${usdtPricePCT}%</strong> </span>
             `)
                
            });
            }, 35);
    
    
            setTimeout(function() {
              precioGasEthereum = document.getElementById("precioGAS")
              
              document.getElementById("precioGAS")
              fetch('https://ethgas.watch/api/gas')
              .then(response => response.json())
              .then(data => {
                  let ethgasPrice = data.fast.gwei;
                  ethgas.push(ethgasPrice)
                  $("#precioGAS").append(`
                  <span class="topbartext"> <strong> ${ethgasPrice} GWEI</strong> </span>           `)
                  
              });
              }, 35);





////////////////////////////////////////
////////////////////////////////////////

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
    <span class="notes" id="miholdTextAdded"> ${holdEth.myHold} ETH // $${(holdEth.myHold * precioEther).toFixed(2)} // ${f.getDate() + "-"+ (f.getMonth() + 1) + "-" +f.getFullYear()}</span>
`)    

localStorage.setItem("miholdText", JSON.stringify($("#miholdTextAdded").html()));
$("#miholdTextAdded").html(localStorage.getItem("miholdText"));

// let ethNote1 = localStorage.setItem("miholdText", JSON.stringify($("#miholdTextAdded").html()));

// ethNotes.push(ethNote1)

;   
            // let txName = document.getElementById('txName').value;
            // let newTx = {txName: txName, txInversion: document.getElementByI('txInversion').value, txPrecio: document.getElementById('txPrecio').value, txHoldings: document.getElementById('txHoldings').value, txArs: document.getElementById('txArs').value}

            // const txs = []
            // console.log(newTx)
            // txs.push(newTx) ; 

            // localStorage.setItem("txs", JSON.stringify(txs));
    
});






setTimeout(function() {
    
let miholdText = localStorage.getItem("miholdText");

console.log(miholdText)

$("#localstorage").append( `
<span class="notes" id="miholdTextAdded"> ${miholdText}</span>
`)    }, 100)