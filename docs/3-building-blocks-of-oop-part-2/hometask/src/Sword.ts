import { Weapon } from "./Weapon";

// your code goes here
export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("sword", value, weight, baseDamage, baseDurability);
    }
    public polish(): void {
        const polishRes = this.damageModifier + this.MODIFIER_CHANGE_RATE;
        const maxDamageModifier = this.baseDamage * 0.25;
        if (polishRes < maxDamageModifier) {
            this.damageModifier = polishRes;
        }
    }
}