let personas = [
    {nombre: "Angie", edad: 32, ciudad: "San Salvador"},
    {nombre: "Rodolfo", edad: 34, ciudad: "San Salvador"},
    {nombre: "Akemi", edad: 21, ciudad: "San Salvador"},
    {nombre: "Maria", edad: 19, ciudad: "Morazán"},
];

function buscarNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre === nombre)
}

let personaBuscada = buscarNombre(personas, "Angie"); // Se cambió "persona" por "personas"
console.log(personaBuscada);
