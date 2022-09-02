import Letter from "./Letter";
import Oversize from "./Oversize";
import Package from "./Package";
import Shipment from "./Shipment";
import { ShipmentData } from "./types";

export default class ShipmentFabric {
    createShipment(shipmentData: ShipmentData): Shipment {
        let shipment;
        if (shipmentData.Weight <= 15) {
            shipment =  new Letter(shipmentData);
        } else if (shipmentData.Weight >=15 && shipmentData.Weight <= 160) {
            shipment = new Package(shipmentData);
        } else {
            shipment = new Oversize(shipmentData);
        }

        return shipment;
    }
}