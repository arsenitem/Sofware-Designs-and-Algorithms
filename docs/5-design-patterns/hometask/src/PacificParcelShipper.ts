import Letter from "./Letter";
import Package from "./Package";
import Shipment from "./Shipment";
import Shipper from "./Shipper";

export default class PacificParcelShipper extends Shipper {
    getCost(shipment: Shipment): number {
        if (shipment instanceof Letter) {
            return shipment.getWeight() * 0.51;
        }

        if (shipment instanceof Package) {
            return shipment.getWeight() * 0.19;
        }

        return shipment.getWeight() * 0.02 + shipment.getWeight() * 0.19;
    }
}