import ShipmentDecorator from "./ShipmentDecorator";

export default class ReturnReceiptDecorator extends ShipmentDecorator {
    getAdditionalInfo(): string {
        return this.component.getAdditionalInfo() +"\n**MARK RETURN RECEIPT REQUESTED**";
    }
}