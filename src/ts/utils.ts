import { Tile } from "./validation";

export function create2DArray(rows: number, cols: number): Array<Array<any>> {
  const arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

export function getTilePosition(tile: HTMLElement): Array<number> {
  const currentTile = tile.dataset;
  const keys: any = Object.values(currentTile);
  const x: number = keys[0];
  const y: number = keys[1];
  return [x, y];
}

export function getVectorComponents(start: Tile, end: Tile) {
  return [Math.abs(start.x - end.x), Math.abs(start.y - end.y)];
  //getVectorComponents(params)[0] returns the movement in the y axis
  //getVectorComponents(params)[1] returns the movement in the x axis
}
