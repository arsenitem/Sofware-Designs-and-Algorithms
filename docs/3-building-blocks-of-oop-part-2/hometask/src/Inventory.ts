import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

// your code goes here
export class Inventory {
    protected items: Array<Item>

    constructor(items? : Array<Item>) {
        this.items = items || [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(): void
    public sort(comparator: ItemComparator): void
    public sort(comparator: ItemComparator = null): void {
        if (comparator) {
            this.items.sort(comparator.compare);
            return;
        }

        this.items.sort((a: Item, b: Item) => a.getValue() - b.getValue());
    }

    public toString() {
        return this.items.join(', ');
    }
}