import { SeaLogistics } from "./sea-logistic";
import { Ship } from "./sea/Ship";

describe('SeaLogistics', () => {
    it('should be create', () => {
        expect(new SeaLogistics()).toBeDefined();
    });

    it('should be able to transport', () => {
        let seaLogistic:SeaLogistics = new SeaLogistics();
        expect(seaLogistic.factoryMethod()).toBeInstanceOf(Ship);   
    });
})