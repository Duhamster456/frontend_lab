type Point = {
	x: number;
	y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(a: number | Point, b: number | Point, c?: number, d?: number): number {
	if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
		return Math.sqrt((c - a) ** 2 + (d - b) ** 2);
	} else if (typeof a === "object" && typeof b === "object") {
		return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
	}
	throw new Error("Invalid arguments");
}