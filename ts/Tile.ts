import * as UTILS from "./utils.js";

export default class Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
  constructor(i: number, j: number, tile: Element) {
    this.x = i;
    this.y = j;
    this.tile = tile;
    this.piece = "none";
  }
}
