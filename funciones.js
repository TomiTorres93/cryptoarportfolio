



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





// function cambiarprecio() {
//     let inputNombre = document.getElementById("nombre");
//     let nombres = document.getElementById("nombre").value;

//     document.getElementById('precio').innerHTML = `${inputNombre.value}`


//     }

// const selectElement = document.querySelector('#nombre');

// selectElement.addEventListener('change', (event) => {
//     const resultado = document.querySelector('#precio');
//     resultado.textContent = `Te gusta el sabor ${event.target.value}`;
// });

//  var auto_refresh = setInterval(
//     function()
//      {
//     $('#precio').fadeOut("fast").load('precio.value').fadeIn("slow");
//      }, 1000);

}, 500);

