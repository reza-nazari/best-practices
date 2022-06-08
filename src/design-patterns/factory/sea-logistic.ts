import { Creator, Product } from "./delivery-factory";
import { Ship } from "./sea/Ship";

export class SeaLogistics extends Creator {
    public factoryMethod(): Product {
        return new Ship();
    }
}