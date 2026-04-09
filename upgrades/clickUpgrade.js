import { Upgrade } from "./upgrade.js";
import { gamestate } from "../gamestate.js";

export class ClickUpgrade extends Upgrade {
    constructor(upgradeContainerName, cost) {
        super(upgradeContainerName, cost);
    }

    onClick() {
        if (gamestate.score >= this._upgradeCost) {
            gamestate.score -= this._upgradeCost;

            gamestate.incrementCount*=2;
            this._upgradeValueDisplay.innerHTML = `Amount Per Click: ${gamestate.incrementCount}`;

            this._upgradeCost *= 2;
            this.updateCostDisplay();
        }
    }
}