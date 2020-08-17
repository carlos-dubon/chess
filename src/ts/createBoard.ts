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
      boardArray[i][j] = new Tile(i, j, col, "none");

      if (i == 0 && (j == 0 || j == 7)) {
        col.innerHTML = CONSTANTS.bR;
        boardArray[i][j].piece = "t"; //Black rook
      }
      if (i == 0 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.bH;
        boardArray[i][j].piece = "j"; //Black knight
      }
      if (i == 0 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.bB;
        boardArray[i][j].piece = "n"; //Black bishop
      }
      if (i == 0 && j == 3) {
        col.innerHTML = CONSTANTS.bK;
        boardArray[i][j].piece = "l"; //Black king
      }
      if (i == 0 && j == 4) {
        col.innerHTML = CONSTANTS.bQ;
        boardArray[i][j].piece = "w"; //Black queen
      }
      if (i == 1) {
        col.innerHTML = CONSTANTS.bP;
        boardArray[i][j].piece = "o"; //Black pawn
      }

      if (i == 0 || i == 1) {
        //This is the black team rows
        boardArray[i][j].team = "black";
      }

      if (i == 7 && (j == 0 || j == 7)) {
        col.innerHTML = CONSTANTS.wR;
        boardArray[i][j].piece = "r"; //White rook
      }
      if (i == 7 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.wH;
        boardArray[i][j].piece = "h"; //White knight
      }
      if (i == 7 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.wB;
        boardArray[i][j].piece = "b"; //White bishop
      }
      if (i == 7 && j == 3) {
        col.innerHTML = CONSTANTS.wQ;
        boardArray[i][j].piece = "q"; //White queen
      }
      if (i == 7 && j == 4) {
        col.innerHTML = CONSTANTS.wK;
        boardArray[i][j].piece = "k"; //White king
      }
      if (i == 6) {
        col.innerHTML = CONSTANTS.wP;
        boardArray[i][j].piece = "p"; //White pawn
      }

      if (i == 6 || i == 7) {
        //This is the white team rows
        boardArray[i][j].team = "white";
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
