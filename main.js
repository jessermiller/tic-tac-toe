"use strict";

import gameBoard from "./gamesBoard.js";
import { winGmMsgO, winGmMsgX, drawMsg, currentTurnMsg } from "./displayController.js";
const board = document.getElementById('board');
const tableCells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn');
const winningMessage = document.getElementById('winningMessage');
let playing = false;


startGame();
function startGame() {
    console.log("ok it works");
    tableCells.forEach(cell => cell.addEventListener('click', tableCellClick));
    restartBtn.addEventListener('click', startGame);
   winningMessage.textContent = currentTurnMsg;

    
}

function tableCellClick() {
console.log("hlr hur hur");
}

function updateCell(cell, id){

}

function updatePlayer() {

}

function checkWinner() {

}

function restartGame() {

}