const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ejerciciosDir = 'C:/Users/michg/Downloads/Ejercicios3 - 11 de mayo 2024';

function ejecutarEjercicio(numero) {
    const nombreArchivo = `Ejercicio${numero}_3.js`;
    const rutaArchivo = path.join(ejerciciosDir, nombreArchivo);

    fs.readFile(rutaArchivo, 'utf8', (error, data) => {
        if (error) {
            console.error(`Error al leer el archivo: ${error.message}`);
            rl.close();
            return;
        }
        console.log(`Ejecutando ${nombreArchivo}...`);
        try {
            eval(data); // Ejecuta el contenido del archivo como código JavaScript
        } catch (e) {
            console.error(`Error al ejecutar el ejercicio: ${e.message}`);
        }
    });
}

rl.question('Ingrese el número del ejercicio que desea ejecutar (1-7): ', (respuesta) => {
    const numeroEjercicio = parseInt(respuesta.trim()); // Eliminar espacios alrededor del número
    if (numeroEjercicio >= 1 && numeroEjercicio <= 7) {
        ejecutarEjercicio(numeroEjercicio);
    } else {
        console.log('Número de ejercicio inválido. Programa finalizado.');
        rl.close();
    }
});

rl.on('close', () => {
    console.log('Programa finalizado.');
    process.exit(0);
});