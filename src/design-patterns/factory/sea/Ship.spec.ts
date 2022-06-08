import { Ship } from "./Ship";

describe('Ship', () => {
    let ship: Ship;

    beforeEach(() => {
        ship = new Ship();
    });

    it('should be create', () => {
        expect(ship).toBeDefined();
    });

    it('should be able to transport', () => {
        let mockResponse = 'Ship: Transporting by sea';
        expect(ship.operation()).toEqual(mockResponse);
    });
})