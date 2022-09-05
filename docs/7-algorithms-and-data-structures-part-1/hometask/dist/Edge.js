"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Edge {
    from;
    to;
    weight;
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight > 0 ? weight : 1;
    }
}
exports.default = Edge;
//# sourceMappingURL=Edge.js.map