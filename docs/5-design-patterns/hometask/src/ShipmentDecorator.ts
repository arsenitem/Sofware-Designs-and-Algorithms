import Shipment from "./Shipment";
import ShipmentInterface from "./ShipmentInterface";

export default class ShipmentDecorator implements ShipmentInterface{
    protected component: Shipment;
    constructor(component: Shipment) {
        this.component = component;
    }

    public getAdditionalInfo() {
        return this.component.getAdditionalInfo();
    }

    public getWeight() {
        return this.component.getWeight();
    }

    public getFromAddress(): string {
        return this.component.getFromAddress();
    }

    public getToAddress(): string {
        return this.component.getToAddress();
    }

    public getShipmentId() {
        return this.component.getShipmentId();
    }
}