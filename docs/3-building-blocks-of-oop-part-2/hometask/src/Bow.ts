import { Weapon } from "./Weapon";

// your code goes here
export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("bow", value, weight, baseDamage, baseDurability);
    }
    public polish(): void {
        if (this.getDurability() + this.MODIFIER_CHANGE_RATE < 1) {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}