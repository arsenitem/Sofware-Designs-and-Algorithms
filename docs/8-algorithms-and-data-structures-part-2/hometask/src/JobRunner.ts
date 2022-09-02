import Job from "./Job";

export default class JobRunner {
    jobs: Array<Job>

    constructor() {
        this.jobs = [];
    }

    insert(job: Job) {
        this.jobs.push(job);
        this.sortDesc();
    }
    maximum() {
        return this.jobs[0] || null;
    }
    extractMax() {
        if (this.jobs.length) {
            return this.jobs.shift();
        }
        return null
    }
    changePriority(id: number, newPriority: number) {
        const job = this.jobs.find((j) => j.id === id);
        if (job) {
            job.priority = newPriority;
        }
        this.sortDesc();
    }
    private sortDesc() {
        this.jobs.sort((jobA, jobB) => {
            return jobB.priority - jobA.priority;
        })
    }
}