import * as CONSTANTS from "./constants";
import * as UTILS from "./utils";
import Tile from "./Tile";
import validation from "./validation";

const boardArray = UTILS.create2DArray(
  CONSTANTS.boardRows,
  CONSTANTS.boardCols
);

let clickCounter: number = 0;
let startPosition: Tile;
let endPosition: Tile;

export function createBoard(rows: number, cols: number, board: Element | null) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      col.setAttribute("data-row", `${i}`);
      col.setAttribute("data-col", `${j}`);
      boardArray[i][j] = new Tile(i, j, col);

      if (i == 0 && (j == 0 || j == 7)) {
        col.innerHTML = CONSTANTS.bR;
        boardArray[i][j].piece = "bR";
      }
      if (i == 0 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.bH;
        boardArray[i][j].piece = "bH";
      }
      if (i == 0 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.bB;
        boardArray[i][j].piece = "bB";
      }
      if (i == 0 && j == 3) {
        col.innerHTML = CONSTANTS.bK;
        boardArray[i][j].piece = "bK";
      }
      if (i == 0 && j == 4) {
        col.innerHTML = CONSTANTS.bQ;
        boardArray[i][j].piece = "bQ";
      }
      if (i == 1) {
        col.innerHTML = CONSTANTS.bP;
        boardArray[i][j].piece = "bP";
      }

      if (i == 7 && (j == 0 || j == 7)) {
        col.innerHTML = CONSTANTS.wR;
        boardArray[i][j].piece = "wR";
      }
      if (i == 7 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.wH;
        boardArray[i][j].piece = "wH";
      }
      if (i == 7 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.wB;
        boardArray[i][j].piece = "wB";
      }
      if (i == 7 && j == 3) {
        col.innerHTML = CONSTANTS.wQ;
        boardArray[i][j].piece = "wQ";
      }
      if (i == 7 && j == 4) {
        col.innerHTML = CONSTANTS.wK;
        boardArray[i][j].piece = "wK";
      }
      if (i == 6) {
        col.innerHTML = CONSTANTS.wP;
        boardArray[i][j].piece = "wP";
      }

      col.addEventListener("click", function () {
        clickCounter++;
        if (clickCounter == 2) {
          clickCounter = 0; //Reset the click counter
        }

        if (clickCounter == 1) {
          //Initial position
          startPosition =
            boardArray[UTILS.getTilePosition(this)[0]][
              UTILS.getTilePosition(this)[1]
            ];
        } else {
          //Final position
          endPosition =
            boardArray[UTILS.getTilePosition(this)[0]][
              UTILS.getTilePosition(this)[1]
            ];
          validation(startPosition, endPosition);
        }
      });

      row.appendChild(col);

      if ((i + j) % 2 == 0) {
        col.classList.add("light");
      } else {
        col.classList.add("dark");
      }
    }
    board?.append(row);
  }
}
