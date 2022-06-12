"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCodeFactory = void 0;
const road_logistic_1 = require("./design-patterns/factory/road-logistic");
const sea_logistic_1 = require("./design-patterns/factory/sea-logistic");
function clientCodeFactory(creator) {
    return creator.someOperation();
}
exports.clientCodeFactory = clientCodeFactory;
console.log('App: Launched with the RoadLogistics.');
let output = clientCodeFactory(new road_logistic_1.RoadLogistics());
console.log(output);
console.log('2');
console.log('App: Launched with the SeaLogistics.');
output = clientCodeFactory(new sea_logistic_1.SeaLogistics());
console.log(output);
console.log('');
