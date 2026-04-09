import { gamestate } from "./gamestate.js";

import { ClickUpgrade } from "./upgrades/clickUpgrade.js";

import { AutoClickAmountUpgrade } from "./upgrades/autoClick/autoClickAmountUpgrade.js";
import { AutoClickDelayUpgrade } from "./upgrades/autoClick/autoClickDelayUpgrade.js";

let scoreDisplay = document.getElementById("scoreDisplay");
let mainButton = document.getElementById("mainButton");

let click_Upgrade = new ClickUpgrade(
    "clickUpgrade",
    10
);

let auto_Click_Amount_Upgrade = new AutoClickAmountUpgrade(
    "autoClickAmountUpgrade",
    100
);

let auto_Click_Delay_Upgrade = new AutoClickDelayUpgrade(
    "autoClickDelayUpgrade",
    1000
);

mainButton.addEventListener("click", (event) => {
    gamestate.score += gamestate.incrementCount;
});

click_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    click_Upgrade.onClick();
});

auto_Click_Amount_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    auto_Click_Amount_Upgrade.onClick();
});

auto_Click_Delay_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    auto_Click_Delay_Upgrade.onClick();
});

let autoClickCounter = 0;
setInterval(() => {
    autoClickCounter++;

    if (gamestate.autoClickAmount > 0) {
        gamestate.score += gamestate.autoClickAmount;
    }

}, gamestate.autoClickDelay * 1000);

let displayCounter = 0;
setInterval(() => {
    displayCounter++;
    scoreDisplay.innerHTML = `${gamestate.score} + ${gamestate.autoClickAmount / gamestate.autoClickDelay}/s`;
    click_Upgrade.getUpgradeCostDisplay().innerHTML = `Cost: ${click_Upgrade.getCost()}`;
    auto_Click_Amount_Upgrade.getUpgradeCostDisplay().innerHTML = `Cost: ${auto_Click_Amount_Upgrade.getCost()}`;
    auto_Click_Delay_Upgrade.getUpgradeCostDisplay().innerHTML = `Cost: ${auto_Click_Delay_Upgrade.getCost()}`;
}, 100);

// TODO: update the cost of the auto click upgrades