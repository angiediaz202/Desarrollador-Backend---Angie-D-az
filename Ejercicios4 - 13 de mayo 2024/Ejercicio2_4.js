function multiplicarPromise(a,b){
    return new Promise((resolve, reject) => {
        const resultado = a*b
        
        if(isNaN(resultado)){
            reject(` ERROR, NO HAY ARGUMENTOS VÁLIDOS`)
        }else{
            resolve(resultado)
        }
    })
}

multiplicarPromise(2,4)
.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.error(error)
})