import * as UTILS from "./utils.js";

export default class Tile {
  x: number;
  y: number;
  tile: object;
  constructor(i: number, j: number, currentTile: object) {
    this.x = i;
    this.y = j;
    this.tile = currentTile;
  }

  getDOMElement() {
    let position = UTILS.getTileDataSetPosition(this.tile);
    let element = document.querySelectorAll(`[data-position="${position}"]`)[0];
    return element;
  }
}
