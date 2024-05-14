const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite la categoría del vehículo: ", (categoria) => {
    let tipoVehiculo
    switch (categoria) {
        case 'Moto': 
        tipoVehiculo = "Motocicleta";
        break;

        case 'Auto': 
        tipoVehiculo = "Auto";
        break;

        case 'Camión':
        tipoVehiculo = "Super camión";
        break;

        case 'Bicicleta':
        tipoVehiculo = "Super bicicleta";

        default: 
        tipoVehiculo = "La categoría digitada no existe";
        break;
    }
    console.log(tipoVehiculo)
})