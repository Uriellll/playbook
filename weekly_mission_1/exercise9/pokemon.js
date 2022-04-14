class Pokemon{
    constructor(name){
        this.name = name;

    }
    sayHello (){
        console.log("Hola mi nombre es" + this.name);
    }
    sayMessage(mensaje){
        console.log(mensaje);
    }
}
module.exports = Pokemon;