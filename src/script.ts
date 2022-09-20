import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Patolino', 3, 50, 2, true, 'preto com verde');

function takeOff (animal: ICanFly) {
    animal.fly();
}

function goSwim (animal: ICanSwim) {
    animal.swim();
}

function letsWalk (animal: ICanWalk) {
    animal.walk();
}

takeOff (duck);
goSwim (duck);
letsWalk (duck);
