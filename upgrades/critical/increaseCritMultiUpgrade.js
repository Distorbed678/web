import { Upgrade } from "../upgrade.js";
import { gamestate } from "../../gamestate.js";

export class IncreaseCritMultiUpgrade extends Upgrade {
    constructor(upgradeContainerName, cost) {
        super(upgradeContainerName, cost);
    }

    onClick() {
        if (gamestate.score >= this._upgradeCost) {
            gamestate.score -= this._upgradeCost;

            gamestate.criticalMulti += 5;
            this._upgradeValueDisplay.innerHTML = `Crit Multi: ${gamestate.criticalMulti}`;

            this._upgradeCost *= 2;
            this.updateCostDisplay()
        }
    }
}