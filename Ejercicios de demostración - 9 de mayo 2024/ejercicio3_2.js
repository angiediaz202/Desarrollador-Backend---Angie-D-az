class Persona {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su peso en kg: ", function(peso) {
    rl.question("Ingrese su altura en metros: ", function(altura) {
        let persona = new Persona(parseFloat(peso), parseFloat(altura));
        let imc = persona.calcularIMC();
        console.log(`Su IMC es: ${imc.toFixed(2)}`);
        rl.close();
    });
});