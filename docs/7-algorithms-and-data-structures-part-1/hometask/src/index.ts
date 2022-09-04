import Dijkstra from "./Dijkstra";
import Edge from "./Edge";
import Vertex from "./Vertex";
import WeightedGraph from "./WeightedGraph";

const verticles = [
    new Vertex('0', 5, 5),
    new Vertex('1', 15, 15),
    new Vertex('2', 0, 12),
    new Vertex('3', 3, 42),
    new Vertex('4', 50, 15)
]

const edges = [
    new Edge(verticles[0], verticles[3], 3),
    new Edge(verticles[2], verticles[1], 5),
    new Edge(verticles[0], verticles[2], 1),
    new Edge(verticles[1], verticles[3], 6),
    new Edge(verticles[1], verticles[2], 5),
    new Edge(verticles[2], verticles[3], 1),
];
const graph: WeightedGraph = new WeightedGraph();

verticles.forEach(vertex => {
    graph.addVertex(vertex);
})

edges.forEach(edge => {
    graph.addEdge(edge);
})

const dijkstra = new Dijkstra(graph);

dijkstra.findAllShortestPaths(verticles[0]);