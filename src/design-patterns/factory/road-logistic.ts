import { Creator, Product } from "./delivery-factory";
import { Truck } from "./road/Truck";

export class RoadLogistics extends Creator {
    public factoryMethod(): Product {
        return new Truck();
    }
}