import { ShipmentData } from "./types";
let id = 0;
export default class Shipment {
    private ShipmentID: number;
    private Weight: number;
    private FromAddress: string;
    private FromZipCode: string;
    private ToAddress: string;
    private ToZipCode: string;
    private Fragile: boolean;
    private NotLeave: boolean;
    private ReturnReceipt: boolean;

    constructor(data: ShipmentData) {
        this.ShipmentID = data.ShipmentID || id+1;
        this.Weight = data.Weight;
        this.FromAddress = data.FromAddress;
        this.FromZipCode = data.FromZipCode;
        this.ToAddress = data.ToAddress;
        this.ToZipCode = data.ToZipCode;
        this.Fragile = data.Fragile;
        this.NotLeave = data.NotLeave;
        this.ReturnReceipt = data.ReturnReceipt;
    }
    public getShipmentId(): number {
        return this.ShipmentID;
    }
    public getFromAddress(): string {
        return this.FromAddress;
    }
    public getToAddress(): string {
        return this.ToAddress;
    }
    public getWeight():number {
        return this.Weight;
    }
    public getAdditionalInfo(): string {
        let res = "";
        if (this.Fragile) {
            res = res+ "\n**MARK FRAGILE**"
        }
        if (this.NotLeave) {
            res = res+ "\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**"
        }
        if (this.ReturnReceipt) {
            res = res+ "\n**MARK RETURN RECEIPT REQUESTED**"
        }
        return res;
    }
}