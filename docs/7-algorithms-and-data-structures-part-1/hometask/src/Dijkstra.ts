import Vertex from "./Vertex";
import WeightedGraph from "./WeightedGraph";

export default class Dijkstra {
    graph: WeightedGraph;
    constructor(graph: WeightedGraph) {
        this.graph = graph;
    }

    findShortestPath(v1: Vertex, v2: Vertex) {
        return this.findAllShortestPaths(v1)[v2.name];
    }

    findAllShortestPaths(start: Vertex) {
        let visited: Array<Vertex> = [start];
        let verticlesWeight = {
            [start.name]: 0,
        }

        const ancestors = {};
        // initialize distance for all verticles
        this.graph.vertices.forEach((vertex) => {
            if (vertex.name !== start.name) {
                verticlesWeight[vertex.name] = Infinity;
            }

        })

        // start search
        while(visited.length < this.graph.vertices.length) {
            // visited.at(-1) is current vertex   W
            const currentVertex = visited.at(-1);
            if (currentVertex) {
                // Consider all vertices that have a straight path from W
                const neighbours = this.findNeigbours(currentVertex);
                neighbours.forEach((vertex) => {
                    // Neighbour verticle weight = W + weight of path from W to neighbour verticle 
                    // Update weight for neighbours if they are lower than previous values
                    // So called relaxation
                    if (verticlesWeight[currentVertex.name] + vertex.weight < verticlesWeight[vertex.value]) {
                        verticlesWeight[vertex.value] = verticlesWeight[currentVertex.name] + vertex.weight;
                        // when update vertex weight update its ancestors;
                        ancestors[vertex.value] = currentVertex.name
                    } 
                    
                })
                
                // Select from not visited the one with minimum weight;
                const minVertexKey = this.findMinWeightVertex(verticlesWeight, visited);
                const minVertex = this.graph.getVertexByKey(minVertexKey);
                visited.push(minVertex as Vertex);
            }    
        }
        console.log(ancestors);
        return this.formatResult(verticlesWeight, ancestors, start);
    }

    private findNeigbours(vertex: Vertex) {
        if (vertex) {
            const neighbours: Array<{
                value: string,
                weight: number
            }> = [];
            this.graph.edges.forEach((edge) => {
                if (edge.from.name === vertex.name) {
                    neighbours.push({value: edge.to.name, weight: edge.weight});
                }
            })
            return neighbours;
        }
        return [];
    }

    private findMinWeightVertex(verticlesWeight: any, visited: Array<Vertex>) {
        const notVisitedVerticlesWeights: any = Object.entries(verticlesWeight).filter((vertex: any) => {
            return !visited.map(v => v.name).includes(vertex[0])
        })
        let min = notVisitedVerticlesWeights[0][1];
        let minKey = notVisitedVerticlesWeights[0][0];
        notVisitedVerticlesWeights.forEach((vertex: any) => {
            if (vertex[1] < min) {
                min = vertex[1]
                minKey = vertex[0]
            }
        });
        return minKey;
    }

    private formatResult(weights, ancestors, start: Vertex) {
        const res = {};
        this.graph.vertices.forEach((vertex) => {
            const path = this.restorePath(vertex, ancestors, start);
            res[vertex.name] = {
                path,
                distance: weights[vertex.name]
            }
        });
        return res;
    }

    private restorePath(vertex: Vertex, ancestors: any, start: Vertex) {
        const path = []
        let currentAncestor = ancestors[vertex.name];
        if (currentAncestor) {
            path.unshift(vertex.name);
            while(currentAncestor !== start.name) {
                path.unshift(currentAncestor);
                currentAncestor = ancestors[currentAncestor];
            }
            path.unshift(currentAncestor);
        }
        return path;
       
    }
}