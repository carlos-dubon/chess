import * as CONSTANTS from "./constants";

interface Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
}

export default function validate(start: Tile, end: Tile) {
  if (start.piece == CONSTANTS.wP) {
    console.log("White Pawn selected");
  }
}
