"use strict";


const board = document.getElementById('board');
const tableCells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn');
const winningMessage = document.getElementById('winningMessage');




// maybe store cellId aswell as current turn(x or o) in gameboardst, then run a function that checks if any winning variations that include a same playerletter that have happened wins

const gameFlow = {
    currentPlayer: 'X',
    players: ['X', 'O'],
    gmeBoardState: [],
    winningVariationsX: [
    ["X0", "X1", "X2"],
    ["X3", "X4", "X5"],
    ["X6", "X7", "X8"],
    ["X0", "X3", "X6"],
    ["X1", "X4", "X7"],
    ["X2", "X5", "X8"],
    ["X0", "X4", "X8"],
    ["X2", "X4", "X6"],
  ],
    winningVariationsO: [
        ["O0", "O1", "O2"],
        ["O3", "O4", "O5"],
        ["O6", "O7", "O8"],
        ["O0", "O3", "O6"],
        ["O1", "O4", "O7"],
        ["O2", "O5", "O8"],
        ["O0", "O4", "O8"],
        ["O2", "O4", "O6"], 
    ]
}

//winningVariations: [
   // [0, 1, 2],
   // [3, 4, 5],
   // [6, 7, 8],
   // [0, 3, 6],
   // [1, 4, 7],
   // [2, 5, 8],
   // [0, 4, 8],
   // [2, 4, 6],
  //]





startGame();

function startGame() {
    console.log("Game Initialized");
    tableCells.forEach(cell => cell.addEventListener('click', tableCellClick, {
        once: true
    }));
    restartBtn.addEventListener('click', restartGame);

    function tableCellClick(event) {
        // tell it when clicked use function update player to change current player as well as change chars. tell it to run update cell aswell and chceck winner
        const cellId = this.getAttribute("id");
        const cell = event.currentTarget;
        console.log(`this is a ${cell}`);
        const currentTurn = gameFlow.currentPlayer;
        updateCell(cell, currentTurn, cellId);
        checkWinner;
        console.log(`current turn ${currentTurn}, current player ${gameFlow.currentPlayer}`)

    }

    function updateCell(cell, currentTurn, cellId) {
        cell.textContent = currentTurn;
        let playerVal = cellId;
        if (gameFlow.currentPlayer == 'X') {
            gameFlow.currentPlayer = 'O';


        } else {
            gameFlow.currentPlayer = 'X';

        }
        let currentTurnMsg = `${gameFlow.currentPlayer}'s turn.`;
        winningMessage.textContent = currentTurnMsg;
        updatePlayer(currentTurn, playerVal);

    }


    function updatePlayer(currentTurn, playerVal) {
        let newPlayerVal = currentTurn + playerVal;
        console.log(`playerVal ${newPlayerVal}`);
        gameFlow.gmeBoardState.push(newPlayerVal);
        console.log(gameFlow.gmeBoardState);
    }

    function checkWinner() {



        let winGmMsgX = `${playerX} has won the game.`;
        let winGmMsgO = `${playerO} has won the game.`;
        let drawMsg = `A draw.`;



    }

    function restartGame() {
        tableCells.forEach(cell => cell.textContent = "");
        winningMessage.textContent = "X's Turn.";
        gameFlow.currentPlayer = 'X';
        startGame();

    }


};