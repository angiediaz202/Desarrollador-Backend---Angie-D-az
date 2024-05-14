function operacionAsincrona(callback){
    setTimeout(() =>{
        callback('Operación asíncrona completada')
    }, 8000)
}

operacionAsincrona((mensaje) =>{
    console.log(mensaje)
})