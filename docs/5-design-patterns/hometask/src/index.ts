import Client from "./Client";
import { ShipmentData } from "./types";

const client = new Client();

const sipmentDataLetterAirEast: ShipmentData = {
    ShipmentID: 0,
    Weight: 10,
    FromAddress: "From test adress",
    FromZipCode: "114068",
    ToAddress: "To test adress",
    ToZipCode: "413562",
    Fragile: true,
    NotLeave: true,
    ReturnReceipt: false,
}
const letterAirEastResult = client.send(sipmentDataLetterAirEast);
console.log(letterAirEastResult);