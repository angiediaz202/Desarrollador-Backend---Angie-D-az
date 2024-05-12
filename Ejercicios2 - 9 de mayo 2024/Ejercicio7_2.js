let personas = [
    {nombre: 'Juan', edad: 24},
    {nombre: 'Maria', edad: 23},
    {nombre: 'Angie', edad: 25},
    {nombre: 'Rodolfo', edad: 30},
]

let personasOrdenadas = personas.sort((a,b) => a.edad - b.edad)
console.log(personasOrdenadas)