let estudiantes = [
    {nombre: "Angie", edad: 21},
    {nombre: "Jose", edad: 22},
    {nombre: "Akemi", edad: 23},
]

let profesores = [
    {nombre: "Juan", Materia: "Matemáticas"},
    {nombre: "Alejandro", Materia: "Lenguaje"},
    {nombre: "Antonio", Materia: "Ciencias"},
]

function combinarObjetos (a,b){
    let comunidadEducativa = [...a, ...b];
    return comunidadEducativa
}

let comunidad = combinarObjetos(estudiantes, profesores);
console.log(comunidad)