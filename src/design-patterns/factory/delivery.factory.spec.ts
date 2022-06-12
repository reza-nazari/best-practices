import { Creator } from "./delivery-factory";
import { RoadLogistics } from "./road-logistic";
import { Truck } from "./road/Truck";

function MockClientCodeFactory(creator: Creator): string {
  return creator.someOperation();
}

describe("Factory", () => {
  it("should create a creator", () => {
    const creator = MockClientCodeFactory;
    expect(creator).toBeTruthy();
  });

  it("should be able to transport", () => {
    const truck: Truck = new Truck();
    const mock = `Creator: The same creator's code has just worked with ${truck.operation()}`;

    let roadLogistic: Creator = new RoadLogistics();
    expect(MockClientCodeFactory(roadLogistic)).toEqual(mock);
  });
});
