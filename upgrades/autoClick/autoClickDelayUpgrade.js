import { Upgrade } from "../upgrade.js";
import { gamestate } from "../../gamestate.js";

export class AutoClickDelayUpgrade extends Upgrade {
    constructor(upgradeContainerName, cost) {
        super(upgradeContainerName, cost);
    }

    onClick() {
        if (gamestate.score >= this._upgradeCost) {
            gamestate.score -= this._upgradeCost;

            gamestate.autoClickDelay -= 0.05;

            this._upgradeCost *= 4;
        }
    }
}