function conteoPalabras(array){
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if(contadorPalabras[palabra]){
                contadorPalabras[palabra]++;
            }else{
                contadorPalabras[palabra]=1;
            }
        })
    });
    return contadorPalabras;
}

let palabrasArray = ["Hola, buenos días", "Hola, buenas tardes", "Hola, buenas noches"];
let resultado = conteoPalabras();
console.log(resultado)