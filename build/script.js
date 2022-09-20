"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'preto com verde');
function takeOff(animal) {
    animal.fly();
}
function goSwim(animal) {
    animal.swim();
}
function letsWalk(animal) {
    animal.walk();
}
takeOff(duck);
goSwim(duck);
letsWalk(duck);