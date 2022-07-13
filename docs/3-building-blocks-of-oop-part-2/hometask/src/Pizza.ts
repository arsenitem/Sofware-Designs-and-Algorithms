import { Consumable } from "./Consumable";

// your code goes here
export class Pizza extends Consumable {
    protected numberOfSlices: number;
    protected slicesEaten: number = 0;
    constructor(numberOfSlices: number, spoiled: boolean) {
        super("pizza", 25, 0.4, spoiled);
        this.numberOfSlices = numberOfSlices;
    }
    
    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            if (this.slicesEaten === this.numberOfSlices) {
                this.setConsumed(true);
            }
            return "You eat a slice of the pizza";
        }
        return "";
    }
}