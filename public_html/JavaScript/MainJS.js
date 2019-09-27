/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Tic Tac Toe scripts, January 2017
 * Version 2
 * Owen Ross
 */

// This is getting all of the td tags and storing them in a variable
var board = document.getElementsByTagName("td");

// assuming we index the 9 tic tac toe cells from left to right, top to
// bottom, as 0-8, these would be all of the winning combinations:
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// X always gets to go first
var player = "X";

// keep track of how many cells are empty at any time
var empty = 9;

// keep track of game status - false if still playing
var gameOver = false;

/* Function resetGame() is called when user clicks on the "game reset" button
 1. sets content of all 9 cells to nothing
 2. sets the starting player (this version, X always starts the game)
 3. updates the message to the current player
 4. resets the number of empty cells to 9
 5. sets the game over flag to false to indicate that the game is in progress
 */
function resetGame() {

    // This clears the grid of all Xs and Os.
    for (i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }
    // This sets the empty variable back to 9
    empty = 9;
    //This sets the player variable back to "X", because X always goes first
    player = "X";
    // This will display a message that it is X's turn
    document.getElementById("player").innerHTML = player;

    // This resets the gameOver variable to false because the game is not over 
    gameOver = false;

}

/* Function cellClicked() is called
 when the event listeners for the "td" cells fire which occurs
 when the user clicks on one of the nine cells of the board
 1. decreases # of empty cells by 1
 2. sets the content of the clicked cell to the current player's mark
 3. checks whether or not there is a winner
 4. flips (changes) the current player
 5. updates the message to the current player
 */
function cellClicked(cell) {

    //This if statement checks to see if the game is over or not
    if (gameOver === false) {
        //This will decrease the variable empty by a value of one
        empty--;
        // This will put the value of player of the cell that the player clicks
        cell.innerHTML = player;
        // This will call to the checkWin function to see if someone has won
        checkWin();
        //This will switch between X and O depending on which one went before
        player = (player === "X") ? "O" : "X";
        // This will display a message saying if its X's or O's turn
        document.getElementById("player").innerHTML = player;
    }
}

/* Function checkWin() is called to check all winning combinations and display results
 */
function checkWin() {

    // This is checking the grid to see if there has been a winning combination
    for (i = 0; i < winSets.length; i++) {
        if (board[winSets[i][0]].innerHTML == board[winSets[i][1]].innerHTML
                && board[winSets[i][1]].innerHTML == board[winSets[i][2]].innerHTML
                && board[winSets[i][0]].innerHTML != "") {
            // This is setting gameOver variable to true because the game would be over
            gameOver = true;

            // If X won the game it will display a message saying X won
            if (player === "X") {
                document.getElementById("winner").innerHTML = "X Wins!";
                // If O won the game it will display a message saying O won
            } else if (player === "O") {
                document.getElementById("winner").innerHTML = "O Wins!";
            }

            // This calls to the display win function and passing the value true into it
            displayWin(gameOver);
        }

    }

    // This checks to see if all of the cells are filled
    if (empty === 0) {
        // This sets the gameOver variable to true because the game is over    
        gameOver = true;
        // This will display a message saying that no one wins 
        document.getElementById("winner").innerHTML = "No one wins!";
        // This will call to the displayWin function and passing the value true into it
        displayWin(gameOver);

    }
}

/* Enhancements you can try:
 - highlight (change background colour) of the cell that was just clicked to indicate that it was the last move; make sure it goes back to the regular background when the next user clicks
 - make the starting player random
 - keep track of statistics (how many times each player wins)
 - hide the "Player X Go!" on startup; show it only while game is playing
 - when a winner is determined, the player information still swaps: would be nice if it didn't (I would
 automatically hide those things before the game starts and when it ends (Week 3))
 - change the font colour of the winning combination (don't forget to change it back when the game is reset)
 */

// ==========================================================================
// DON'T TOUCH THESE LINES OF CODE  (we'll learn this stuff in a later lesson)
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("message").addEventListener("click", function () {
    displayWin(false);
});
for (i = 0; i < board.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function () {
        cellClicked(this);
    });
}
// displays the results window with the winner inside it: the method will
// either show the results or hide them (displayWin(true) shows and 
// displayWin(false) hides)
function displayWin(show) {
    if (show) {
        document.getElementById("message").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}

// ===============================================================
