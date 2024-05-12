let personas = [
    {nombre: "Angie", edad: 32, ciudad: "San Salvador"},
    {nombre: "Rodolfo", edad: 34, ciudad: "San Salvador"},
    {nombre: "Akemi", edad: 21, ciudad: "San Salvador"},
    {nombre: "Maria", edad: 19, ciudad: "Morazán"},
];

function filtrarPeople(personaObjeto, ciudad){
    return personaObjeto.filter(persona => persona.edad >30 && persona.ciudad === ciudad)
}

let personasFiltradas = filtrarPeople(personas, "San Salvador")
console.log(personasFiltradas);