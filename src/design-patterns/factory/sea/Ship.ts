import { Product } from "../delivery-factory";

export class Ship implements Product {
    public operation(): string {
        return "Ship: Transporting by sea";
    }
}