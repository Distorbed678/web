import { Upgrade } from "../upgrade.js";
import { gamestate } from "../../gamestate.js";

export class AutoClickAmountUpgrade extends Upgrade {
    constructor(upgradeContainerName, cost) {
        super(upgradeContainerName, cost);
    }

    onClick() {
        if (gamestate.score >= this._upgradeCost) {
            gamestate.score -= this._upgradeCost;

            gamestate.autoClickAmount += 1;

            this._upgradeCost *= 2;
        }
    }
}