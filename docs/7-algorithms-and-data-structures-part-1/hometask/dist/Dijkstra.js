"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dijkstra {
    graph;
    constructor(graph) {
        this.graph = graph;
    }
    findShortestPath(v1, v2) {
        return this.findAllShortestPaths(v1)[v2.name];
    }
    findAllShortestPaths(start) {
        let visited = [start];
        let verticlesWeight = {
            [start.name]: 0,
        };
        const paths = this.initializePaths(start);
        // initialize distance for all verticles
        this.graph.vertices.forEach((vertex) => {
            if (vertex.name !== start.name) {
                verticlesWeight[vertex.name] = Infinity;
            }
        });
        // start search
        while (visited.length < this.graph.vertices.length) {
            // visited.at(-1) is current vertex   W
            const currentVertex = visited.at(-1);
            if (currentVertex) {
                // Consider all vertices that have a straight path from W
                const neighbours = this.findNeigbours(currentVertex);
                // console.log("sosedi ", currentVertex.name, neighbours)
                neighbours.forEach((vertex) => {
                    // Neighbour verticle weight = W + weight of path from W to neighbour verticle 
                    // Update weight for neighbours if they are lower than previous values
                    if (verticlesWeight[currentVertex.name] + vertex.weight < verticlesWeight[vertex.value]) {
                        verticlesWeight[vertex.value] = verticlesWeight[currentVertex.name] + vertex.weight;
                        // paths[vertex.value].splice(paths[vertex.value].length - 1, 0, currentVertex.name);
                        if (currentVertex.name !== start.name) {
                            paths[vertex.value].push(currentVertex.name);
                        }
                    }
                });
                // Select from not visited the one with minimum weight;
                const minVertexKey = this.findMinWeightVertex(verticlesWeight, visited);
                const minVertex = this.graph.getVertexByKey(minVertexKey);
                visited.push(minVertex);
            }
        }
        console.log(verticlesWeight);
        console.log(paths);
        return verticlesWeight;
        // console.log(visited);
    }
    findNeigbours(vertex) {
        if (vertex) {
            const neighbours = [];
            this.graph.edges.forEach((edge) => {
                if (edge.from.name === vertex.name) {
                    neighbours.push({ value: edge.to.name, weight: edge.weight });
                }
            });
            return neighbours;
        }
        return [];
    }
    findMinWeightVertex(verticlesWeight, visited) {
        const notVisitedVerticlesWeights = Object.entries(verticlesWeight).filter((vertex) => {
            return !visited.map(v => v.name).includes(vertex[0]);
        });
        let min = notVisitedVerticlesWeights[0][1];
        let minKey = notVisitedVerticlesWeights[0][0];
        notVisitedVerticlesWeights.forEach((vertex) => {
            if (vertex[1] < min) {
                min = vertex[1];
                minKey = vertex[0];
            }
        });
        return minKey;
    }
    initializePaths(start) {
        let paths = {};
        this.graph.vertices.forEach((v) => {
            //paths[v.name] = [start.name, start.name,start.name,start.name,start.name];
            paths[v.name] = [];
        });
        paths[start.name] = [];
        return paths;
    }
}
exports.default = Dijkstra;
//# sourceMappingURL=Dijkstra.js.map