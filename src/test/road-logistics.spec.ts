import { RoadLogistics } from "../design-patterns/factory/road-logistic";
import { Truck } from "../design-patterns/factory/road/Truck";


describe('RoadLogistics', () => {
    it('should be create', () => {
        expect(new RoadLogistics()).toBeDefined();
    });

    it('should be able to transport', () => {
        let roadLogistic: RoadLogistics = new RoadLogistics();
        expect(roadLogistic.factoryMethod()).toBeInstanceOf(Truck);
    })
})