import Letter from "./Letter";
import Package from "./Package";
import Shipment from "./Shipment";
import Shipper from "./Shipper";

export default class ChicagoSprintShipper extends Shipper {
    getCost(shipment: Shipment): number {
        if (shipment instanceof Letter) {
            return shipment.getWeight() * 0.42;
        }

        if (shipment instanceof Package) {
            return shipment.getWeight() * 0.2;
        }

        return 0;
    }
}