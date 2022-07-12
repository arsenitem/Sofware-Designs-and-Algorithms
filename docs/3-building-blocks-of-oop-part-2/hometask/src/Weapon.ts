import { Item } from "./Item";

// your code goes here
export abstract class Weapon extends Item {
    protected MODIFIER_CHANGE_RATE: number = 0.05;
    protected baseDamage: number;
    protected damageModifier: number = 0;
    protected baseDurability: number;
    protected durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    abstract polish(): void;

    public use(): string {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()}, it is broken.`;
        }

        this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
        
        let useResult = `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
        return this.getDurability() <= 0 ? `${useResult}. The hammer breaks.` : useResult;
    }

    public getDamage() {
        return this.baseDamage + this.damageModifier;
    }
    public getDurability() {
        return this.baseDurability + this.durabilityModifier;
    }
    public toString(): string {
        return `${this.getName} − Value: ${this.getValue}, Weight: ${this.getWeight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }
}