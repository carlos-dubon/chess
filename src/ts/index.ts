const stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    document.querySelector(".loader")?.classList.add("loader-done");
  }
}, 150);

renderBoard();
import "@fortawesome/fontawesome-free/js/all.js";
import "../scss/main.scss";
import * as CONSTANTS from "./constants";
import { createBoard } from "./createBoard";
import * as CONTAINER from "./container";

createBoard(CONSTANTS.boardRows, CONSTANTS.boardCols, CONSTANTS.board);

CONTAINER.labels();

function renderBoard(): void {
  const boardContainer: HTMLDivElement | null = document.querySelector(
    ".board-container"
  );
  if (boardContainer != null) {
    boardContainer.innerHTML = `
        <div class="row-1"></div>
        <div class="row-2">
          <div class="col-1"></div>
          <div class="col-2"><div class="board"></div></div>
          <div class="col-3"></div>
        </div>
        <div class="row-3"></div>
        `;
  }
}
