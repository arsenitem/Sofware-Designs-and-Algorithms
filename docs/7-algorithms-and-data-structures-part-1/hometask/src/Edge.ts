import Vertex from "./Vertex";

export default class Edge {
    from: Vertex;
    to: Vertex;
    weight: number;
    constructor(from: Vertex, to: Vertex, weight: number) {
        this.from = from;
        this.to = to;
        this.weight = weight > 0 ? weight: 1;
    }
}