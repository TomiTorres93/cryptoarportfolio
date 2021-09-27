let precioDolar = parseInt(180);

let usdHolding = holding * precio;
let pesosHolding = usdHolding * precioDolar;

const moneda = new Moneda (nombre, precio, holding, usdHolding, pesosHolding);

// let nombre = prompt("Ingrese el tipo de moneda");
// let holding = Number(prompt("Ingrese la cantidad de " + nombre + " comprado"));
// let precio = Number(prompt("Ingrese el precio de la moneda al momento de la compra"));
// let inversion = " USD " + (precio * holding);


//ANIMACIONES
$(() => {
    $("#p1").fadeOut(500)
    $("#p1").fadeIn(500)

    $("#darkmodebutton").click(() => {
    $("#p1").fadeOut(500)
    $("#p1").fadeIn(500)
        })

})


// let nombre = "ADA";
// let holding = 2;
// let precio = 2;
// let inversion = " USD " + (precio * holding);


// frase = `Has agregado ${holding} de ${nombre} a tu portfolio`;
// console.log(frase);




// // BOTONES ADD



// let form = document.getElementById('form');

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let formValues = new FormData(e.target);

//     console.log(precioDolar);

//     let moneda = {nombre: formValues.get("nombre"), precio: formValues.get("precio"), holding: formValues.get("holding"), usdHolding: parseInt(formValues.get("holding") *formValues.get("precio")), pesosHolding: parseFloat(parseInt(formValues.get("holding") *formValues.get("precio")) * precioDolar)};
//       form.reset();

//     const arrMonedas = []

//     arrMonedas.push(moneda);
//     console.log(moneda);
    
//     localStorage.setItem("MonedasEnLocalStorage", JSON.stringify(arrMonedas));

// });


// // agregar Moneda

// const addCoinButton = document.getElementById('addCoinButton') 

// addCoinButton.addEventListener('click', function () {

//     nuevaMoneda = document.getElementById("nuevaMoneda");
    
//     nuevaMoneda.innerHTML += `
//     <div class="row2">
//     <p> ${moneda[0]} </p>
//     <p> ${moneda.inversion} </p>
//     <p> ${moneda.precio} </p>
//     <p> ${moneda.usdHolding} </p>
//     </div>
//         `;   
//         console.log(precio)
//         console.log(moneda.inversion)
// });


// BOTONES ADD
let form = document.getElementById('form');
const addCoinButton = document.getElementById('addCoinButton') 
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValues = new FormData(e.target);
    console.log(precioDolar);
    let moneda = new Moneda (formValues.get("nombre"), formValues.get("precio"), formValues.get("holding"), parseInt(formValues.get("holding") *formValues.get("precio")), parseFloat(parseInt(formValues.get("holding") *formValues.get("precio")) * precioDolar));
    form.reset();
    const arrMonedas = []
    arrMonedas.push(moneda) ; 
    
      
    console.log(moneda);
    localStorage.setItem("txs", JSON.stringify(arrMonedas));




        $("#nuevaMoneda").append( `
        <div class="row2">
        <p class="subtit"> ${moneda.nombre}</p>
        <p class="subtit"> ${"$" + (moneda.precio * moneda.holding)}</p>
        <p class="subtit"> ${"$" + moneda.precio} </p>
        <p class="subtit"> ${moneda.usdHolding + " " + moneda.nombre} </p>
        </div>
            `);

            // for (var i = 0; i < arrMonedas.length; i++) {
            //     console.log(...arrMonedas)
            //     }
});






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

precioEthereum = document.getElementById("precioEthereum")

document.getElementById("precioEthereum")
fetch('https://criptoya.com/api/bitstamp/eth')
.then(response => response.json())
.then(data => {
    let ethPrice = data.last;
    console.log(ethPrice)
    $("#precioEthereum").append(`
    <span class="topbartext"> <strong> ${ethPrice}</strong> </span>
 `)
    
});

//BTC 

precioBitcoin = document.getElementById("precioBitcoin")

document.getElementById("precioBitcoin")
fetch('https://criptoya.com/api/bitstamp/btc')
.then(response => response.json())
.then(data => {
    const btcPrice = data.last;
    console.log(btcPrice)
    $("#precioBitcoin").append(`
    <span class="topbartext"> <strong> ${btcPrice}</strong> </span>
 `)
});

console.log(btcPrice)

//ADA 

precioMATIC = document.getElementById("precioMATIC")

document.getElementById("precioMATIC")
fetch('https://criptoya.com/api/bitstamp/matic')
.then(response => response.json())
.then(data => {
    let maticPrice = data.last;
    console.log(maticPrice)
    $("#precioMATIC").append(`
    <span class="topbartext"> <strong> ${maticPrice}</strong> </span>
 `)
    
});


// let coin = []
// divEth = document.getElementById("divEth")

//  document.getElementById("precioETH").addEventListener("click", () => {
//   fetch('https://criptoya.com/api/bitstamp/eth')
//   .then(res => res.json())
//  .then(data => {
//       {
//         if (eth = "last")    
//       divEth.innerHTML += `
//              <p id="${eth}"> ${data[eth]} </p>
//           `
//          coin.push({valor: data[eth]})
//            }
//        }
//     )

//     .catch(error => console.error(error))
//  })





// $("#p1").show()

// fadein  fadeout




// //AGREGA LA INFORMACIÓN PEDIDA EN LOS PROMPT

// addPrice = document.getElementById("addPrice").innerHTML = precio;
// addName = document.getElementById("addName").innerHTML = nombre;
// addHolding = document.getElementById("addHolding").innerHTML = holding + " " + nombre;
// addInversion = document.getElementById("addInversion").innerHTML = " USD " + (precio * holding);



    // nuevaMoneda = document.getElementById("nuevaMoneda");
    
    // nuevaMoneda.innerHTML += `
    // <div class="row2">
    // <p class="subtit"> ${moneda.nombre}</p>
    // <p class="subtit"> ${"$" + (moneda.precio * moneda.holding)}</p>
    // <p class="subtit"> ${"$" + moneda.precio} </p>
    // <p class="subtit"> ${moneda.usdHolding + " " + moneda.nombre} </p>
    // </div>
    //     `; 


// addPrice.appendChild()
// addName.appendChild()
// addHolding.appendChild()
// addInversion.appendChild()


// if  (nombre == "bitcoin" || nombre == "btc" || nombre == "BTC" || nombre == "Bitcoin") {
//     var precio = Number(parseInt(49000));
// } else if  (nombre == "ether" || nombre == "eth" || nombre == "ETH" || nombre == "ethereum") {
//     var precio = Number(parseInt(3200));
// } else if  (nombre == "ada" || nombre == "cardano" || nombre == "ADA") {
//     var precio = Number(parseFloat(2.8));
// } else if  (nombre == "dai" || nombre == "DAI") {
//     var precio = Number(parseInt(1));
// }  


// monedas.sort((a, b) => {
//     if (a.precio < b.precio) {
//         return -1;
//     } if (a.precio > b.precio) {
//         return 1;
//     } return 0;
// }

// )

/////////////////////////////////////// 
//////////////////////////////////////
