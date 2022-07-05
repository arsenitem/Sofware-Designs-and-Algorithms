import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  public v1: Point;
  public v2: Point;
  public v3: Point;

  public constructor(v1: Point, v2: Point, v3: Point);
  public constructor(v1: Point, v2: Point, v3: Point, color: string);
  public constructor(
    v1: Point,
    v2: Point,
    v3: Point,
    color: string,
    filled: boolean
  );
  public constructor(
    v1: Point,
    v2: Point,
    v3: Point,
    color?: string,
    filled?: boolean
  ) {
    super([v1, v2, v3], color, filled);
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  public toString(): string {
    return `Triangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`;
  }

  public getType(): string {
    const sideOneDistance = this.v1.distance(this.v2).toFixed(1);
    const sideTwoDistance = this.v2.distance(this.v3).toFixed(1);
    const sideThreeDistance = this.v3.distance(this.v1).toFixed(1);
    const counts = {};
    const sampleArray = [sideOneDistance, sideTwoDistance, sideThreeDistance];

    sampleArray.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    let type = "scalene triangle";
    if (Object.keys(counts).length == 2) {
      type = "isosceles triangle";
    }
    if (Object.keys(counts).length == 1) {
      type = "equilateral triangle";
    }
    return type;
  }
}
