'use strict';

//Selecting elements
const player0element = document.querySelector(".player--0");
const player1element = document.querySelector(".player--1");
const score0_element = document.querySelector("#score--0");
const score1_element = document.querySelector("#score--1");
const current0element = document.getElementById("current--0");
const current1element = document.getElementById("current--1");
const dice_element = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0_element.textContent = 0;
score1_element.textContent = 0;
dice_element.classList.add("hidden");

//Current Score
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

let switchPlayer = function() {
    //Switch to next player 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    player0element.classList.toggle("player--active");
    player1element.classList.toggle("player--active");
    
    console.log(scores[0] + " " + scores[1]);
};

//Roll the dice
btnRoll.addEventListener("click", function() {
    //1.Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice 
    dice_element.classList.remove("hidden");
    dice_element.src = `dice-${dice}.png`;
    //Check for rolled 1
    if (dice !== 1) {
    //Add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        switchPlayer();
    }
});


btnHold.addEventListener("click", function() {
    if (activePlayer === 0) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
    } else {
        scores[activePlayer] = scores[activePlayer] + currentScore;
    }

    if (scores[activePlayer] >= 100) {
        for (let i = 0; i < scores.length; i++) {
            //Output scores after win
            document.getElementById(`current--${i}`).textContent = scores[i];   
        }
    } else {
        switchPlayer();
    }
});

//Reset Button
btnNew.addEventListener("click", function() {
    //Setting to initial settings
    for (let i = 0; i < scores.length; i++) {
       scores[i] = 0;   
    }
    currentScore = 0;
    activePlayer = 0;
    score0_element.textContent = 0;
    score1_element.textContent = 0;
    current0element.textContent = 0;
    current1element.textContent = 0;
    dice_element.classList.add("hidden");
    player0element.classList.add("player--active");
    player1element.classList.remove("player--active");
});

