import * as CONSTANTS from "./constants.js";
import * as UTILS from "./utils.js";
import Tile from "./Tile.js";

const boardArray = UTILS.create2DArray(
  CONSTANTS.boardRows,
  CONSTANTS.boardCols
);

let mousePressed: number = 0;
let initialPosition: Element;
let finalPosition: Element;

export function createBoard(rows: number, cols: number, board: any) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("div");
      col.classList.add("col");
      col.setAttribute("data-row", `${i}`);
      col.setAttribute("data-col", `${j}`);
      col.setAttribute("data-position", `${i}${j}`);

      let currentTile = col.dataset;
      boardArray[i][j] = new Tile(i, j, currentTile);

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
        //console.log(UTILS.getTileDataSetPosition(col.dataset));
        console.log(
          boardArray[UTILS.getTilePosition(this)[0]][
            UTILS.getTilePosition(this)[1]
          ]
        );
        mousePressed++;
        if(mousePressed==2){
          mousePressed = 0;
        }

        if(mousePressed==1){
          initialPosition = this;
        }else if(mousePressed==0){
          finalPosition = this;
          let move = initialPosition.innerHTML;
          finalPosition.innerHTML = move;
          initialPosition.innerHTML = '';
          //console.log(move)
        }

        

        // console.log({mousePressed})
      });

      row.appendChild(col);

      if ((i + j) % 2 == 0) {
        col.classList.add("light");
      } else {
        col.classList.add("dark");
      }
    }
    board.append(row);
  }
}
