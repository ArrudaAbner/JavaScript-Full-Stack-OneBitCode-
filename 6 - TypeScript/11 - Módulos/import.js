"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var nave = {
    name: "X-wing",
    pilot: "luke skywalker",
    speed: 50,
    weapons: 4,
};
console.log(lodash.camelCase(nave.pilot));
