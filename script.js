import { gamestate } from "./gamestate.js";
import "./eventHandler.js"
import * as Upgrades from "./upgrades/upgrades.js"

let scoreDisplay = document.getElementById("scoreDisplay");
let mainButton = document.getElementById("mainButton");

mainButton.addEventListener("click", (event) => {
    if ((Math.floor(Math.random() * 100) + 1) <= gamestate.criticalChance) {
        gamestate.score += gamestate.incrementCount * gamestate.criticalMulti;
    } else {
        gamestate.score += gamestate.incrementCount;
    }

    scoreDisplay.innerHTML = `${gamestate.score} + ${gamestate.autoClickDelay === 1 ? (gamestate.autoClickAmount * gamestate.autoClickDelay) : (gamestate.autoClickAmount * (1 + gamestate.autoClickDelay))}/s`;
});

let autoClickCounter = 0;
setInterval(() => {
    autoClickCounter++;

    if (gamestate.autoClickAmount > 0) {
        gamestate.score += gamestate.autoClickAmount;
    }

    scoreDisplay.innerHTML = `${gamestate.score} + ${gamestate.autoClickDelay === 1 ? (gamestate.autoClickAmount * gamestate.autoClickDelay) : (gamestate.autoClickAmount * (1 + gamestate.autoClickDelay))}/s`;

}, gamestate.autoClickDelay * 1000);