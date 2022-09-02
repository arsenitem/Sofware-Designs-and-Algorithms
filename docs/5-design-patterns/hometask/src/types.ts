export interface ShipmentData {
    ShipmentID: number,
    Weight: number,
    FromAddress: string,
    FromZipCode: string,
    ToAddress: string,
    ToZipCode: string,
    Fragile: boolean,
    NotLeave: boolean,
    ReturnReceipt: boolean
}