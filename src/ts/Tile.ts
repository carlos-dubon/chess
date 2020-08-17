export default class Tile {
  x: number;
  y: number;
  tile: Element;
  team: string;
  piece: string;
  constructor(i: number, j: number, tile: Element, team: string) {
    this.x = i;
    this.y = j;
    this.tile = tile;
    this.piece = "none";
    this.team = team;
  }
}