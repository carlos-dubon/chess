import * as CONSTANTS from "./constants";
import * as UTILS from "./utils";
import Tile from "./Tile";
import validation from "./validation";
import { stats } from "./stats";

const move1 = new Audio("./audio/move1.mp3");
const move2 = new Audio("./audio/move2.mp3");
const capture = new Audio("./audio/capture1.mp3");

export const boardArray = UTILS.create2DArray(
  CONSTANTS.boardRows,
  CONSTANTS.boardCols
);

let click: boolean = false;
let startPosition: Tile;
let endPosition: Tile;

let startIcon: Element;
let endIcon: Element;

let turn: boolean = true;

let sec: number = 30;

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
        boardArray[i][j].piece = CONSTANTS.bR; //Black rook
      }
      if (i == 0 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.bH;
        boardArray[i][j].piece = CONSTANTS.bH; //Black knight
      }
      if (i == 0 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.bB;
        boardArray[i][j].piece = CONSTANTS.bB; //Black bishop
      }
      if (i == 0 && j == 3) {
        col.innerHTML = CONSTANTS.bK;
        boardArray[i][j].piece = CONSTANTS.bK; //Black king
      }
      if (i == 0 && j == 4) {
        col.innerHTML = CONSTANTS.bQ;
        boardArray[i][j].piece = CONSTANTS.bQ; //Black queen
      }
      if (i == 1) {
        col.innerHTML = CONSTANTS.bP;
        boardArray[i][j].piece = CONSTANTS.bP; //Black pawn
      }

      if (i == 0 || i == 1) {
        //This is the black team rows
        boardArray[i][j].team = "black";
      }

      if (i == 7 && (j == 0 || j == 7)) {
        col.innerHTML = CONSTANTS.wR;
        boardArray[i][j].piece = CONSTANTS.wR; //White rook
      }
      if (i == 7 && (j == 1 || j == 6)) {
        col.innerHTML = CONSTANTS.wH;
        boardArray[i][j].piece = CONSTANTS.wH; //White knight
      }
      if (i == 7 && (j == 2 || j == 5)) {
        col.innerHTML = CONSTANTS.wB;
        boardArray[i][j].piece = CONSTANTS.wB; //White bishop
      }
      if (i == 7 && j == 3) {
        col.innerHTML = CONSTANTS.wQ;
        boardArray[i][j].piece = CONSTANTS.wQ; //White queen
      }
      if (i == 7 && j == 4) {
        col.innerHTML = CONSTANTS.wK;
        boardArray[i][j].piece = CONSTANTS.wK; //White king
      }
      if (i == 6) {
        col.innerHTML = CONSTANTS.wP;
        boardArray[i][j].piece = CONSTANTS.wP; //White pawn
      }

      if (i == 6 || i == 7) {
        //This is the white team rows
        boardArray[i][j].team = "white";
      }

      col.addEventListener("click", function () {
        click = click ? false : true;

        if (
          boardArray[UTILS.getTilePosition(this)[0]][
            UTILS.getTilePosition(this)[1]
          ].team == "none"
        ) {
          click = false;
        }

        if (
          turn &&
          boardArray[UTILS.getTilePosition(this)[0]][
            UTILS.getTilePosition(this)[1]
          ].team == "black"
        ) {
          click = false;
        }
        if (
          !turn &&
          boardArray[UTILS.getTilePosition(this)[0]][
            UTILS.getTilePosition(this)[1]
          ].team == "white"
        ) {
          click = false;
        }

        if (click) {
          //First click
          startPosition =
            boardArray[UTILS.getTilePosition(this)[0]][
              UTILS.getTilePosition(this)[1]
            ];
          startIcon = this;
        } else {
          //Second click
          endPosition =
            boardArray[UTILS.getTilePosition(this)[0]][
              UTILS.getTilePosition(this)[1]
            ];
          if (validation(startPosition, endPosition)) {
            //If the movement is valid

            if (
              (turn &&
                startPosition.team == "white" &&
                endPosition.team == "black") ||
              (turn &&
                startPosition.team == "white" &&
                endPosition.team == "none")
            ) {
              // White turn
              if (endPosition.team == "black") {
                capture.play();
              } else {
                turn ? move1.play() : move2.play();
              }

              endPosition.piece = startPosition.piece;
              endPosition.team = startPosition.team;

              startPosition.piece = "none";
              startPosition.team = "none";

              //Visual movement
              endIcon = this;
              const move = startIcon.innerHTML;
              endIcon.innerHTML = move;
              startIcon.innerHTML = "";

              //A turn has been played
              turn = turn ? false : true; //turn becomes false
              stats(turn);
              sec = 30;
            } else if (
              (!turn &&
                startPosition.team == "black" &&
                endPosition.team == "white") ||
              (!turn &&
                startPosition.team == "black" &&
                endPosition.team == "none")
            ) {
              //Black turn
              if (endPosition.team == "white") {
                capture.play();
              } else {
                turn ? move1.play() : move2.play();
              }
              endPosition.piece = startPosition.piece;
              endPosition.team = startPosition.team;

              startPosition.piece = "none";
              startPosition.team = "none";

              //Visual movement
              endIcon = this;
              const move = startIcon.innerHTML;
              endIcon.innerHTML = move;
              startIcon.innerHTML = "";

              //A turn has been played
              turn = turn ? false : true; //turn becomes false
              stats(turn);
              sec = 30;
            }
          }
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

setInterval(() => {
  if (sec == 0) {
    sec = 30;
    turn = turn ? false : true; //turn becomes false
    stats(turn);
  }
  sec--;
  let sectxt = String(sec);
  if (sectxt.length == 1) {
    sectxt = `0${sectxt}`;
  }

  if (CONSTANTS.seconds != null) {
    CONSTANTS.seconds.innerHTML = sectxt;
  }
}, 1000);
