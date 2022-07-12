import { Item } from "./Item"

// your code goes here
export abstract class Consumable extends Item {
    protected spoiled: boolean;
    protected consumed: boolean = false;
    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }
    public use(): string {
        if (!this.spoiled && !this.consumed) {
            this.consumed = true;
            return this.eat();
        }
        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume.`
        }
    }
    public eat(): string {
        let eatResult = `You eat the ${this.name}.`;
        return this.spoiled ? `${eatResult}\nYou feel sick.`: eatResult;
    }
    public isConsumed(): boolean {
        return this.consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }
}