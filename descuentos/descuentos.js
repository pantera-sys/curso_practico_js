// const precioOriginal = 100;
// const descuento = 15;

function CalcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice")
    const Price = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const Discount = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(Price, Discount);

    const resulP = document.getElementById("resultP");
    resulP.innerText = "El precio con descuento son: $" + precioConDescuento;

}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });