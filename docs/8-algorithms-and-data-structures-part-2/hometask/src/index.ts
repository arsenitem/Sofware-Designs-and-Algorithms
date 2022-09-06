import Job from "./Job";
import JobRunner from "./JobRunner";

const runner = new JobRunner();

runner.insert(new Job(1, 5));
runner.insert(new Job(2, 3));
runner.insert(new Job(3, 10));
runner.insert(new Job(4, 1));
console.log(runner.jobs);

runner.changePriority(4, 100);
console.log(runner.jobs);

console.log(runner.maximum())


while(runner.jobs.length) {
    runner.extractMax()?.execute();
    console.log(runner.jobs)
}
console.time('1')

for (let i = 0; i < 10000; i++) {
    const jobPriority = Math.floor(Math.random() * 1000)
    runner.insert(new Job(i,i));
}

while(runner.jobs.length) {
    runner.extractMax()?.execute()
}

console.timeEnd('1')
