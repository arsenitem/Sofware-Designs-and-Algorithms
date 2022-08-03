import ShipmentDecorator from "./ShipmentDecorator";

export default class NotLeaveDecorator extends ShipmentDecorator {
    getAdditionalInfo(): string {
        return this.component.getAdditionalInfo() +"\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**";
    }
}