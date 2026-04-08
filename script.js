import { clickUpgrade } from "upgrades/clickUpgrade"
import { score } from "globals"

let incrementCount = 1;

let clickUpgradeCost = 10;

let autoClickDelay = 1; // seconds
let autoClickAmount = 1;

let scoreDisplay = document.getElementById("scoreDisplay");
let mainButton = document.getElementById("mainButton");

let clickUpgrade = new clickUpgrade(
    "clickUpgrade"
);

mainButton.addEventListener("click", (event) => {
    score += incrementCount;
});

clickUpgrade.getUpgradeButton().addEventListener("click", (event) => {
    clickUpgrade.
});

let autoClickCounter = 0;
setInterval(() => {
    autoClickCounter++;
    score += autoClickAmount;
}, autoClickDelay * 1000)


let displayCounter = 0;
setInterval(() => {
    displayCounter++;
    scoreDisplay.innerHTML = `${score} + ${autoClickAmount * autoClickDelay}/s`;
    upgradeCostDisplay.innerHTML = `Cost: ${upgradeCost}`;
}, 200);