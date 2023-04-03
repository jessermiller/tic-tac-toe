"use strict";


const board = document.getElementById('board');
const tableCells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn');
const winningMessage = document.getElementById('winningMessage');




// maybe store cellId aswell as current turn(x or o) in gameboardst, then run a function that checks if any winning variations that include a same playerletter that have happened wins

const gameFlow = {
    currentPlayer: 'X',
    players: ['X', 'O'],
    gmeBoardStateX: [],
    gmeBoardStateO: [],
    winningNums: [],
    winningNumsO: [],
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





startGame();

function startGame() {
    console.log("Game Initialized");

    tableCells.forEach(cell => cell.addEventListener('click', tableCellClick, {
        once: true

    }));


    gameFlow.gmeBoardStateX.forEach(cell => () => {



    });

    //restartBtn.addEventListener('click', restartGame);

    function tableCellClick(event) {

        const cellId = this.getAttribute("id");
        const cell = event.currentTarget;
        console.log(`this is a ${cell}`);
        const currentTurn = gameFlow.currentPlayer[0];

        updateCell(cell, currentTurn, cellId);

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
        updatePlayer(currentTurn, playerVal, cellId);

    }


    function updatePlayer(currentTurn, playerVal, cellId) {
        let newPlayerVal = currentTurn + playerVal;
        console.log(`playerVal ${newPlayerVal}`);


        if (currentTurn === gameFlow.players[0]) {
            gameFlow.gmeBoardStateX.push(newPlayerVal);
            console.log(gameFlow.gmeBoardStateX);
        } else {
            gameFlow.gmeBoardStateO.push(newPlayerVal);
            console.log(gameFlow.gmeBoardStateO);
        }

        console.log(gameFlow.gmeBoardStateX, gameFlow.gmeBoardStateO)
        checkWinner(currentTurn, cellId);
    }

    function checkWinner(currentTurn) {




        if (currentTurn === gameFlow.players[0]) {
            for (let i = 0; i < gameFlow.winningVariationsX.length; i++) {
                console.log(gameFlow.winningVariationsX[i]);
                for (let j = 0; j < gameFlow.gmeBoardStateX.length; j++) {
                    console.log(gameFlow.gmeBoardStateX[j]);
                    gameFlow.winningNums = gameFlow.winningVariationsX[i].filter((winNum) => gameFlow.gmeBoardStateX.includes(winNum));
                    console.log(gameFlow.winningNums);
                    if (gameFlow.winningNums.length === 3) {
                        console.log("X WINS!!!!S")
                        let winGmMsg = `${currentTurn} has won the game.`;
                        winningMessage.textContent = winGmMsg;
                        setTimeout(function(){
                            restartGame();
                        }, 2300);

                        //    function showModulXwins(){
                        //     modal.showModul()

                        //    };
                        //    showModulXwins();
                        //    setTimeout( showModulXwins,3000);
                    }
                }
            }
        } else if (currentTurn === gameFlow.players[1]) {
            for (let i = 0; i < gameFlow.winningVariationsO.length; i++) {
                console.log(gameFlow.winningVariationsO[i]);
                for (let j = 0; j < gameFlow.gmeBoardStateO.length; j++) {
                    console.log(gameFlow.gmeBoardStateO[j]);
                    gameFlow.winningNumsO = gameFlow.winningVariationsO[i].filter((winNumO) => gameFlow.gmeBoardStateO.includes(winNumO));
                    console.log(gameFlow.winningNumsO);
                    if (gameFlow.winningNumsO.length === 3) {
                        console.log("O WINS!!!!S")
                        let winGmMsg = `${currentTurn} has won the game.`;
                        winningMessage.textContent = winGmMsg;
                        setTimeout(function(){
                            restartGame();
                        }, 2300);


                    } //else if (gameFlow.winningNumsO.length != 3 &&   gameFlow.winningNums.length != 3 ||  gameFlow.winningNums.length != 1 && gameFlow.winningNumsO.length != 1  ){
                    //     let drawMsg = `A draw.`;
                    //     winningMessage.textContent = drawMsg;

                    // }
                }
            }
        }

    }
 
    function restartGame() {
        tableCells.forEach(cell => cell.textContent = "");
        winningMessage.textContent = "X's Turn.";
        gameFlow.currentPlayer = 'X';
        gameFlow.gmeBoardStateO = [];
        gameFlow.gmeBoardStateX = [];
        gameFlow.winningNums = [];
        gameFlow.winningNumsO = [];
        gameFlow.winningVariationsO = gameFlow.winningVariationsO;
        gameFlow.winningVariationsX = gameFlow.winningVariationsX;
        startGame();
        console.log(gameFlow.gmeBoardStateO, gameFlow.gmeBoardStateX)

    }


};