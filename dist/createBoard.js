import * as CONSTANTS from "./constants.js";
import * as UTILS from "./utils.js";
import Tile from "./Tile.js";
const boardArray = UTILS.create2DArray(CONSTANTS.boardRows, CONSTANTS.boardCols);
export function createBoard(rows, cols, board) {
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
            }
            if (i == 0 && (j == 1 || j == 6)) {
                col.innerHTML = CONSTANTS.bH;
            }
            if (i == 0 && (j == 2 || j == 5)) {
                col.innerHTML = CONSTANTS.bB;
            }
            if (i == 0 && j == 3) {
                col.innerHTML = CONSTANTS.bK;
            }
            if (i == 0 && j == 4) {
                col.innerHTML = CONSTANTS.bQ;
            }
            if (i == 1) {
                col.innerHTML = CONSTANTS.bP;
            }
            if (i == 7 && (j == 0 || j == 7)) {
                col.innerHTML = CONSTANTS.wR;
            }
            if (i == 7 && (j == 1 || j == 6)) {
                col.innerHTML = CONSTANTS.wH;
            }
            if (i == 7 && (j == 2 || j == 5)) {
                col.innerHTML = CONSTANTS.wB;
            }
            if (i == 7 && j == 3) {
                col.innerHTML = CONSTANTS.wQ;
            }
            if (i == 7 && j == 4) {
                col.innerHTML = CONSTANTS.wK;
            }
            if (i == 6) {
                col.innerHTML = CONSTANTS.wP;
            }
            col.addEventListener("click", function () {
                console.log(UTILS.getTileDataSetPosition(col.dataset));
            });
            row.appendChild(col);
            if ((i + j) % 2 == 0) {
                col.classList.add("light");
            }
            else {
                col.classList.add("dark");
            }
        }
        board.append(row);
    }
}
