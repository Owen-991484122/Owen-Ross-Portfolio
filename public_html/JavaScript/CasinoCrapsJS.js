/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dice1;
var dice2;
var displayDiceTotal = document.getElementById("zeros");
var winCounter = 0;
var loseCounter = 0;

function rollTheDice() {
    dice1 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("box1").innerHTML = dice1;
    
    dice2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("box2").innerHTML = dice2;
    
    var diceTotal = (dice1 + dice2);
    
    displayDiceTotal.innerHTML = diceTotal;
    
    checkWin(diceTotal);
    
}

function checkWin (diceTotal) {
    var bet = document.getElementById("bet").value;
    
    if (diceTotal == bet) {
        winCounter++;
        document.getElementById("wins").innerHTML = "Wins: " + winCounter;
    } else {
        loseCounter++;
        document.getElementById("loses").innerHTML = "Losses: " + loseCounter;
    }
}
