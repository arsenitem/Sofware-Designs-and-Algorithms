import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    protected id: number;
    protected value: number;
    protected name: string;
    protected weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = id++;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }
    public compareTo(other: Item): number {
        if (other.value === this.value) {
            return other.name.toLocaleLowerCase() === this.name.toLocaleLowerCase() ? 1 : -1;
        }

        return this.value > other.value ? 1 : -1;
    }
    abstract use(): void;
    public toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public reset(): void {
        id = 0;
    }
}
