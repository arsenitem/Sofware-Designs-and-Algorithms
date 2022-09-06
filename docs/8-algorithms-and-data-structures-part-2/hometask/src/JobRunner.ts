import Job from "./Job";

export default class JobRunner {
    jobs: Array<Job>

    constructor() {
        this.jobs = [];
    }

    insert(job: Job) {
        this.jobs.push(job);
	  
        // индекс элемента, который мы только что добавили
        let index = this.jobs.length - 1;
        
        // если элемент больше, чем его родитель:
        // меняем местами элемент и его родителя
        while (index !== 0 && this.jobs[index] > this.jobs[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }
    maximum() {
        return this.jobs[0] || null;
    }
    extractMax() {
        // удаляем первый элемент из кучи
        const root = this.jobs.shift();
        
        // помещаем последний элемент перед кучей
        // и удаляем последний элемент из кучи, так как он
        // теперь размещен перед множеством
        this.jobs.unshift(this.jobs[this.jobs.length - 1]);
        this.jobs.pop();
        
        // корректно перестраиваем кучу
        //this.heapify(0);
        
        return root;
    }
    changePriority(id: number, newPriority: number) {
        const job = this.jobs.find((j) => j.id === id);
        if (job) {
            job.priority = newPriority;
            let index = this.jobs.length - 1;
        
            // если элемент больше, чем его родитель:
            // меняем местами элемент и его родителя
            while (index !== 0 && this.jobs[index] > this.jobs[this.parent(index)]) {
                this.swap(index, this.parent(index));
                index = this.parent(index);
            }
        }
    }

    private swap(indexA, indexB) {
        const tmp = this.jobs[indexA];
	    this.jobs[indexA] = this.jobs[indexB];
	    this.jobs[indexB] = tmp;
    }

    private peek() {
        return this.jobs[0];
    }
    private parent(index) {
        return Math.floor((index-1)/2) 
    }
    private leftChild(index) {
        return Math.floor((index*2)+1) 
    }
    private rightChild(index) {
        return Math.floor((index*2)+2) 
    }

    private heapify(index) {
        let left = this.leftChild(index);
	  let right = this.rightChild(index);
	  let smallest = index;
	
	  // если левый потомок больше, чем узел, который мы рассматриваем
	  if (left < this.jobs.length && this.jobs[smallest] < this.jobs[left]) {
	    smallest = left;
	  }
	  
	  // если правый потомок больше, чем узел, который мы рассматриваем
	  if (right < this.jobs.length && this.jobs[smallest] < this.jobs[right]) {
	    smallest = right;
	  }
	  
	  // если значение наименьшего элемента изменилось, нужно изменить его положение в куче
	  // и этот метод нужно вызвать снова с переставляемыми элементами
	  if (smallest != index) {
	    this.swap(smallest, index);
	    this.heapify(smallest);
	  }
    }
}