import { Truck } from './Truck';

describe('Truck', () => {
    let truck: Truck;

    beforeEach(() => {
        truck = new Truck();
    });

    it('should be create', () => {
        expect(truck).toBeDefined();
    });

    it('should be able to transport', () => {
        let mockResponse = 'Truck: Transporting by road';
        expect(truck.operation()).toEqual(mockResponse);
    })
})