import { Animal } from "./Animal";

abstract class Bird extends Animal {
    public canFly: boolean; // se voa ou nao  //

    constructor (name:string, lifetime:number, size:number, weight:number, canFly: boolean) {
        super (name, lifetime, size, weight); //invoca o construtor da superclasse (Animal) //
        this.canFly = canFly
    }
}

export { Bird };