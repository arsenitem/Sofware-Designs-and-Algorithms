export class Point {
  public x: number;
  public y: number;

  public constructor();
  public constructor(x: number, y: number);
  public constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;
  public distance(x: any = 0, y: number = 0): number {
    let otherX: number;
    let otherY: number;
    if (x instanceof Point) {
      otherX = x.x;
      otherY = x.y;
    } else {
      otherX = x;
      otherY = y;
    }

    return Math.sqrt((otherX - this.x) ** 2 + (otherY - this.y) ** 2);
  }
}
