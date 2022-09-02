import ShipmentFabric from "./ShipmentFabric";
import ShipperFabric from "./ShipperFabric";
import { ShipmentData } from "./types";

export default class Client {
    send(shipmentData: ShipmentData) {
        const shipmentFabric = new ShipmentFabric();
        const shipperFabric = new ShipperFabric();
        const shipment = shipmentFabric.createShipment(shipmentData);
        const shipper = shipperFabric.createShipper(shipmentData.FromZipCode);
        const result = shipper.ship(shipment);
        return result;
    }
}