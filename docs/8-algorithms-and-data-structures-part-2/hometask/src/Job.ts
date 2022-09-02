export default class Job {
    id: number;
    priority: number;
    constructor(id: number, priority: number) {
        this.id = id;
        this.priority = priority;
    }

    execute(): void {
        console.log('doing some job with priority ', this.priority);
    }
}