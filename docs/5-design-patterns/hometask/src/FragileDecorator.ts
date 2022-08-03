import ShipmentDecorator from "./ShipmentDecorator";
export default class FragileDecorator extends ShipmentDecorator {
    getAdditionalInfo(): string {
        return this.component.getAdditionalInfo() +"\n**MARK FRAGILE**";
    }
}