import "@fortawesome/fontawesome-free/js/all.js";
import "../scss/main.scss";
import * as CONSTANTS from "./constants";
import { createBoard } from "./createBoard";
import * as CONTAINER from "./container";

createBoard(CONSTANTS.boardRows, CONSTANTS.boardCols, CONSTANTS.board);

CONTAINER.labels();
