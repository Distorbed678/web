import { Upgrade } from "../upgrade.js";
import { gamestate } from "../../gamestate.js";

export class IncreaseCritChanceUpgrade extends Upgrade {
    constructor(upgradeContainerName, cost) {
        super(upgradeContainerName, cost);
    }

    onClick() {
        if (gamestate.score >= this._upgradeCost) {
            gamestate.score -= this._upgradeCost;

            gamestate.criticalChance += 1;
            this._upgradeValueDisplay.innerHTML = `Crit Chance: ${gamestate.criticalChance}`;

            this._upgradeCost *= 2;
            this.updateCostDisplay()
        }
    }
}