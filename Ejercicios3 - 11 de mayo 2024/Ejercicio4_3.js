const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite el número a realizar el factorial: ", (num) => {
    if (num%2 === 0){
        console.log("El número es par")
    }else{
        console.log("El número es impar")
    }
})