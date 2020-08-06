import * as CONSTANTS from "./constants.js";

export function createBoard(rows: number, cols: number, board: any) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("div");
      col.classList.add("col");
      // col.setAttribute("data-row", `${i}`);
      // col.setAttribute("data-col", `${j}`);
      col.setAttribute("data-position", `${i}${j}`);

      col.addEventListener("click", function () {
        // getTileDataSet(this.dataset);
        this.innerHTML = CONSTANTS.wK;
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

  let block = document.querySelectorAll(`[data-position="00"]`)[0];
  console.log(block);
}

// const y = document.querySelectorAll("[data-position='11']");
// console.log(y);

// function getTileDataSet(tileData: object) {
//   let keys = Object.values(tileData);
//   let row = keys[0];
//   let col = keys[1];
// }
