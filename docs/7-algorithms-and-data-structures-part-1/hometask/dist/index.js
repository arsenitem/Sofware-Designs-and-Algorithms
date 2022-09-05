"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dijkstra_1 = require("./Dijkstra");
const Edge_1 = require("./Edge");
const Vertex_1 = require("./Vertex");
const WeightedGraph_1 = require("./WeightedGraph");
const verticles = [
    new Vertex_1.default('0', 5, 5),
    new Vertex_1.default('1', 15, 15),
    new Vertex_1.default('2', 0, 12),
    new Vertex_1.default('3', 3, 42),
    new Vertex_1.default('4', 50, 15)
];
const edges = [
    new Edge_1.default(verticles[0], verticles[3], 3),
    new Edge_1.default(verticles[2], verticles[1], 5),
    new Edge_1.default(verticles[0], verticles[2], 1),
    new Edge_1.default(verticles[1], verticles[3], 6),
    new Edge_1.default(verticles[1], verticles[2], 5),
    new Edge_1.default(verticles[2], verticles[3], 1),
];
const graph = new WeightedGraph_1.default();
verticles.forEach(vertex => {
    graph.addVertex(vertex);
});
edges.forEach(edge => {
    graph.addEdge(edge);
});
const dijkstra = new Dijkstra_1.default(graph);
dijkstra.findAllShortestPaths(verticles[0]);
//# sourceMappingURL=index.js.map