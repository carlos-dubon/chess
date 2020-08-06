import * as CONSTANTS from "./constants.js";
export function createBoard(rows, cols, board) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            col.setAttribute("data-position", `${i}${j}`);
            col.addEventListener("click", function () {
                this.innerHTML = CONSTANTS.wK;
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
    let block = document.querySelectorAll(`[data-position="00"]`)[0];
    console.log(block);
}
