import { Product } from "../delivery-factory";

export class Truck implements Product {
    public operation(): string {
        return "Truck: Transporting by road";
    }
}