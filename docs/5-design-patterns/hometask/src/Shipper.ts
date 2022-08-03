import Shipment from "./Shipment";

export default abstract class Shipper {
    abstract getCost(shipment: Shipment) : number;
    ship(shipment: Shipment): string {
        return  `shipment ID = ${shipment.getShipmentId()} will be picked up from ${shipment.getFromAddress()} and shipped to ${shipment.getToAddress()}\nCost = ${this.getCost(shipment)} ${shipment.getAdditionalInfo()}`;
    };
}