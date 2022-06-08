import { Creator } from "./design-patterns/factory/delivery-factory";
import { RoadLogistics } from "./design-patterns/factory/road-logistic";
import { SeaLogistics } from "./design-patterns/factory/sea-logistic";

export function clientCodeFactory(creator: Creator): string {
    return creator.someOperation();
}

console.log('App: Launched with the RoadLogistics.');
clientCodeFactory(new RoadLogistics());
console.log('');

console.log('App: Launched with the SeaLogistics.');
clientCodeFactory(new SeaLogistics());
console.log('');


