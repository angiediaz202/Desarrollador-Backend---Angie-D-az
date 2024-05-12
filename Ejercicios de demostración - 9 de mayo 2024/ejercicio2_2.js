let fechaActual = new Date();

let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

hora = hora < 10 ? '0' + hora : hora;
minutos = minutos < 10 ? '0' + minutos : minutos;
segundos = segundos < 10 ? '0' + segundos : segundos;

let mensaje = `La hora actual es: ${hora}:${minutos}:${segundos}`;
console.log(mensaje);