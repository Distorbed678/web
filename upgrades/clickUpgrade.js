import { Upgrade } from "./upgrade";
import { score } from "../globals";

class ClickUpgrade extends Upgrade {
    constructor(upgradeContainerName) {
        super(upgradeContainerName)
    }

    onClick() {
        if (score >= upgradeCost) {
            score -= upgradeCost;
            incrementCount*=2;
            upgradeCost *= 2;
        }
    }
}