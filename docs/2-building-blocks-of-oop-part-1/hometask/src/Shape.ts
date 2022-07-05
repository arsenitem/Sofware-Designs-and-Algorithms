import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  abstract getType(): string;

  public constructor(points: Point[]);
  public constructor(points: Point[], color: string);
  public constructor(points: Point[], color: string, filled: boolean);
  public constructor(
    points: Point[],
    color: string = "green",
    filled: boolean = true
  ) {
    if (points.length < 3) {
      throw new RangeError();
    }
    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  public toString(): string {
    const filledString = this.filled ? "filled" : "not filled";
    const pointsString =
      this.points.map((p: Point) => p.toString()).join(", ") + ".";
    return `A Shape with color of ${this.color} and ${filledString}. Points: ${pointsString}`;
  }

  public getPerimeter(): number {
    let perimeter = 0;
    for (let i = 0; i < this.points.length - 1; i++) {
      perimeter += this.points[i].distance(this.points[i + 1]);
    }
    perimeter += this.points[this.points.length - 1].distance(this.points[0]);
    return perimeter;
  }
}
