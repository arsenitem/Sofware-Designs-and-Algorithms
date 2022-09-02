import AirEastShipper from "./AirEastShipper";
import ChicagoSprintShipper from "./ChicagoSprintShipper";
import PacificParcelShipper from "./PacificParcelShipper";
import Shipper from "./Shipper";

export default class ShipperFabric {
    createShipper(zipSender: string): Shipper {
        if (!zipSender) {
            return new AirEastShipper();
        }
        if (["1", "2", "3"].includes(zipSender.charAt(0))) {
            return new AirEastShipper();
        }

        if (["4", "5", "6"].includes(zipSender.charAt(0))) {
            return new ChicagoSprintShipper();
        }

        return new PacificParcelShipper();
    }
}