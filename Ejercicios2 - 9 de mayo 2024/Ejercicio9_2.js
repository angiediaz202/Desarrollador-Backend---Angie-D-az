let listaCompras = {
    "Manzanas": 5,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1,
}

const generarListaComptas = (listaCompras) => {
    let listaLegible = "Lista de compras: \n"

    for(let elemento in listaCompras){
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades \n` 
    }

    return listaLegible
    
}

let listaLegible = generarListaComptas(listaCompras);
console.log(listaLegible)