export default interface ShipmentInterface {
    getAdditionalInfo(): string;
    getShipmentId(): number;
    getFromAddress(): string;
    getToAddress(): string;
    getWeight(): number
}