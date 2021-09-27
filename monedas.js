class Moneda { 
    constructor(nombre, precio, holding, usdHolding, pesosHolding) {
    this.nombre = nombre;
    this.precio = precio;
    this.holding = holding;
    this.usdHolding = usdHolding;
    this.pesosHolding = pesosHolding;

}

holdCreado() {
    console.log("Tienes " + this.holding + " de " + this.nombre.toUpperCase() + ". Su precio actual es: USD " + this.precio+ ". Su valor en dólares es: USD" + this.usdHolding + 
    ". Su valor en pesos es: $ " + this.pesosHolding);
}



}

