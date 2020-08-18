import * as CONSTANTS from "./constants";
import { getVectorComponents } from "./utils";

export interface Tile {
  x: number;
  y: number;
  tile: Element;
  piece: string;
  team: string;
}

export default function validate(start: Tile, end: Tile): boolean {
  const yDistance = getVectorComponents(start, end)[0];
  const xDistance = getVectorComponents(start, end)[1];

  if (start.piece == CONSTANTS.wP || start.piece == CONSTANTS.bP) {
    //A pawn was selected
    if (end.piece == "none") {
      //The pawn is just moving
      if (start.x == 6 || start.x == 1) {
        //Check if the pawn hasn't moved, if not: it has 2 available moves
        if (yDistance <= 2 && xDistance == 0) {
          if (start.piece == CONSTANTS.wP) {
            if (end.x < start.x) {
              //This is a valid movement for the white
              return true;
            }
          } else {
            if (end.x > start.x) {
              //This is a valid movement for the black
              return true;
            }
          }
        }
      } else {
        //The pawn only has 1 move available
        if (yDistance <= 1 && xDistance == 0) {
          //This is an available move for the pawn
          if (start.piece == CONSTANTS.wP) {
            if (end.x < start.x) {
              //This is a valid movement for the white
              return true;
            }
          } else {
            if (end.x > start.x) {
              //This is a valid movement for the black
              return true;
            }
          }
        }
      }
    } else if (
      (start.team == "white" && end.team == "black") ||
      (start.team == "black" && end.team == "white")
    ) {
      //The pawn is eating
      if (start.team == "white") {
        //The white pawn is eating
        if (end.x < start.x && yDistance <= 1 && xDistance == 1) {
          return true;
        }
      } else if (start.team == "black") {
        //The black pawn is eating
        if (end.x > start.x && yDistance <= 1 && xDistance == 1) {
          return true;
        }
      }
    }
  } else if (start.piece == CONSTANTS.wR || start.piece == CONSTANTS.bR) {
    //A rook was selected
    if (end.piece == "none") {
      //The rook is just moving
      if (
        (yDistance <= 7 && xDistance == 0) ||
        (yDistance == 0 && xDistance <= 7)
      ) {
        //This is an available move for the rook
        return true;
      }
    } else if (
      (start.team == "white" && end.team == "black") ||
      (start.team == "black" && end.team == "white")
    ) {
      if (
        (yDistance <= 7 && xDistance == 0) ||
        (yDistance == 0 && xDistance <= 7)
      ) {
        //This is an available move for the rook
        return true;
      }
    }
  } else if (start.piece == CONSTANTS.wH || start.piece == CONSTANTS.bH) {
    //A knight was selected
    if (end.piece == "none") {
      //The knight is just moving
      if (
        (yDistance == 2 && xDistance == 1) ||
        (yDistance == 1 && xDistance == 2)
      ) {
        return true;
      }
    }
  } else if (start.piece == CONSTANTS.wB || start.piece == CONSTANTS.bB) {
    //A bishop was selected
    if (end.piece == "none") {
      //The bishop is just moving
      if (xDistance == yDistance) {
        return true;
      }
    }
  } else if (start.piece == CONSTANTS.wQ || start.piece == CONSTANTS.bQ) {
    //A queen was selected
    if (end.piece == "none") {
      //The queen is just moving
      if (
        xDistance == yDistance ||
        (yDistance <= 7 && xDistance == 0) ||
        (yDistance == 0 && xDistance <= 7)
      ) {
        return true;
      }
    }
  } else if (start.piece == CONSTANTS.wK || start.piece == CONSTANTS.bK) {
    //A king was selected
    if (end.piece == "none") {
      //The king is just moving
      if (yDistance == 1 || xDistance == 1) {
        return true;
      }
    }
  } else {
    return false;
  }
  return false;
}
