export default class Tile {
    constructor(i, j, tile) {
        this.x = i;
        this.y = j;
        this.tile = tile;
        this.piece = 'none';
    }
    getElement() {
        return this.tile;
    }
}
