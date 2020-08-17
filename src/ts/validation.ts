import * as CONSTANTS from "./constants";

interface Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
}

export default function validate(start: Tile, end: Tile) {
  console.log(start.piece);

  //   console.log(CONSTANTS.wP) //Esto es un peon blanco y su simbolo es p
  //   console.log(CONSTANTS.wK) //Este es un rey blanco y su simbolo es k

  if (start.piece == CONSTANTS.wP || start.piece == CONSTANTS.bP) {
    //A pawn was selected
    console.log("A pawn was selected");
  } else if (start.piece == CONSTANTS.wR || start.piece == CONSTANTS.bR) {
    //A rook was selected
    console.log("A rook was selected");
  } else if (start.piece == CONSTANTS.wH || start.piece == CONSTANTS.bH) {
    //A knight was selected
    console.log("A knight was selected");
  } else if (start.piece == CONSTANTS.wB || start.piece == CONSTANTS.bB) {
    //A bishop was selected
    console.log("A bishop was selected");
  } else if (start.piece == CONSTANTS.wQ || start.piece == CONSTANTS.bQ) {
    //A queen was selected
    console.log("A queen was selected");
  } else if (start.piece == CONSTANTS.wK || start.piece == CONSTANTS.bK) {
    //A king was selected
    console.log("A king was selected");
  } else {
    //Nothing was selected
    console.log("Nothing was selected");
  }
}
