import Edge from "./Edge";
import Vertex from "./Vertex";

export default class WeightedGraph {
    vertices: Array<Vertex> = [];
    edges: Array<Edge> = [];
    
    addVertex(v: Vertex) {
        this.vertices.push(v)
    }

    addEdge(e: Edge) {
        this.edges.push(e)
    }

    getVertexByKey(key: string) {
        return this.vertices.find((vertex: Vertex) => vertex.name === key);
    }
}