let productoA ={
    nombre: "Camisa",
    precio: 25,
    cantidad: 5
};

let productoB ={
    nombre: "Jeans",
    precio: 40,
    cantidad: 3
};

let costoTotalA = productoA.precio * productoA.cantidad;
let costoTotalB = productoB.precio * productoB.cantidad;

let costoTotal = costoTotalA + costoTotalB;
console.log(costoTotalA);
console.log(costoTotalB);
console.log("total $ " + costoTotal);