export function create2DArray(rows: number, cols: number) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

export function getTileDataSetPosition(tileData: object) {
  let keys = Object.values(tileData);
  return keys[2];
}

export function getTilePosition(tile: any): Array<number> {
  let currentTile = tile.dataset;
  let keys: any = Object.values(currentTile);
  let x: number = keys[0];
  let y: number = keys[1];
  return [x, y];
}
