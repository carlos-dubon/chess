// eslint-disable-next-line no-unused-vars
import { Tile } from "./validation";
// eslint-disable-next-line no-unused-vars
import { boardArray } from "./createBoard";
import validation from "./validation";

const blacksPosition: Array<any> = [];
const whitesPosition: Array<any> = [];

const tilePosition: Array<any> = [];

export function intelligence(): void {
  getWhitesPosition();
  getBlacksPosition();
  try {
    attackWhitePiece();
  } catch (error) {
    moveBlackPiece();
  }
}

// After validation is complete
let startPosition: Tile;
let endPosition: Tile;

export function blackMove(): Array<Tile> {
  if(startPosition.team != "white"){
    return [startPosition, endPosition];
  }else {
    return [];
  }
}

function getBlacksPosition(): void {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (boardArray[i][j].team == "black" && boardArray[i][j].team != "white") {
        blacksPosition.push(boardArray[i][j]);
      }
    }
  }
}

function getWhitesPosition(): void {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (boardArray[i][j].team == "white" && boardArray[i][j].team != "black") {
        whitesPosition.push(boardArray[i][j]);
      }
    }
  }
}

function selectRandomBlack() {
  return blacksPosition[Math.floor(Math.random() * blacksPosition.length)];
}

function selectRandomWhite() {
  return whitesPosition[Math.floor(Math.random() * whitesPosition.length)];
}

function selectRandomDestination() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      tilePosition.push(boardArray[i][j]);
    }
  }
  return tilePosition[Math.floor(Math.random() * tilePosition.length)];
}

function moveBlackPiece() {
  const start: Tile = selectRandomBlack();
  const end: Tile = selectRandomDestination();
  if (validation(start, end) && start.team != "white") {
    // It is a valid move
    startPosition = start;
    endPosition = end;
  } else {
    // The movement is invalid
    moveBlackPiece();
  }
}

function attackWhitePiece() {
  const start: Tile = selectRandomBlack();
  const end: Tile = selectRandomWhite();
  if (validation(start, end) && start.team != "white") {
    // It is a valid move
    startPosition = start;
    endPosition = end;
  } else {
    // The movement is invalid
    attackWhitePiece();
  }
}
