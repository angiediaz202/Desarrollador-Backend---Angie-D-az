const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el primer color: ", (color1) => {
    rl.question("Ingrese el segundo color: ", (color2) => {
        if(color1==="azul" && color2==="amarillo"){
            console.log("La mezcla genera el color verde")            
        }else if(color1 === "azul" && color2 === "rojo"){
            console.log("La mezcla de genera el color morado")
        }else if(color1 === "rojo" && color2 === "amarillo"){
        console.log("La mezcla de colores genera el color naranja")
        }else{
            console.log("La combinación no se encuentra disponible")
        }
    })
})