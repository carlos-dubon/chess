export function create2DArray(rows, cols) {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}
export function getTileDataSetPosition(tileData) {
    let keys = Object.values(tileData);
    return keys[2];
}
export function getTilePosition(tile) {
    let currentTile = tile.dataset;
    let keys = Object.values(currentTile);
    let x = keys[0];
    let y = keys[1];
    return [x, y];
}
