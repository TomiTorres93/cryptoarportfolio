



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

