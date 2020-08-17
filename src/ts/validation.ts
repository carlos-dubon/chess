import * as CONSTANTS from "./constants";

interface Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
}

export default function validate(start: Tile, end: Tile) {
  console.log(`1. ${start.piece} was the start piece.`);
  console.log(`2. ${end.piece} was the end piece.`);
  console.log(`The value of the wP constant is ${CONSTANTS.wP}`);

  if (start.piece == CONSTANTS.wP) {
    console.log("White Pawn selected");
  }
}
