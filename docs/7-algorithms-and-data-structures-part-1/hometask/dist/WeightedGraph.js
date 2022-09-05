"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeightedGraph {
    vertices = [];
    edges = [];
    addVertex(v) {
        this.vertices.push(v);
    }
    addEdge(e) {
        this.edges.push(e);
    }
    getVertexByKey(key) {
        return this.vertices.find((vertex) => vertex.name === key);
    }
}
exports.default = WeightedGraph;
//# sourceMappingURL=WeightedGraph.js.map