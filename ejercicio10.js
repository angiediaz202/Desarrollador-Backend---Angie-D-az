const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: ProgressEvent.stdout
});

rl.question('Ingrese una frase: ', (frase) =>{
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(word => word.charAt(0).toUpperCase() + word.slice (1)).join('')
    console.log(`Frase capitalizada: ${fraseCapitalizada}`)
})