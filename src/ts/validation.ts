import * as CONSTANTS from "./constants";
import { getVectorComponents } from "./utils";

export interface Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
  team: string;
}

export default function validate(start: Tile, end: Tile) {
  if (start.piece == CONSTANTS.wP || start.piece == CONSTANTS.bP) {
    if (end.piece == "none") {
      if (start.x == 6 || start.x == 1) {
        //Check if the pawn hasn't moved, if not it has 2 available moves
      }
    }
  } else if (start.piece == CONSTANTS.wR || start.piece == CONSTANTS.bR) {
    //A rook was selected
  } else if (start.piece == CONSTANTS.wH || start.piece == CONSTANTS.bH) {
    //A knight was selected
  } else if (start.piece == CONSTANTS.wB || start.piece == CONSTANTS.bB) {
    //A bishop was selected
  } else if (start.piece == CONSTANTS.wQ || start.piece == CONSTANTS.bQ) {
    //A queen was selected
  } else if (start.piece == CONSTANTS.wK || start.piece == CONSTANTS.bK) {
    //A king was selected
  } else {
    //Nothing was selected
  }
}
