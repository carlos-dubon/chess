import * as CONSTANTS from "./constants.js";
import { createBoard } from "./createBoard.js";
import * as CONTAINER from "./container.js";

const chessBoard = createBoard(
  CONSTANTS.boardRows,
  CONSTANTS.boardCols,
  CONSTANTS.board
);

CONTAINER.labels();