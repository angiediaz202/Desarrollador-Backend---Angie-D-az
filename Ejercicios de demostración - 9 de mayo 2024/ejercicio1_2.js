class bebe {
    constructor(nombre, meses){
        this.nombre = nombre;
        this.meses = meses;
    }

    llorar(){
        console.log(`${this.nombre} tiene ${this.meses} meses de edad y está llorando`);
    }

    dormir(){
        console.log(`${this.nombre} tiene ${this.meses} meses de edad y está durmiendo`);
    }

    comer(){
        console.log(`${this.nombre} tiene ${this.meses} meses de edad y está comiendo`);
    }
}

let antonio = new bebe("Antonio", 3);
let sonia = new bebe("Sonia", 5);
let javier = new bebe("Javier", 8);

antonio.llorar();
sonia.dormir();
javier.comer();
