export class Upgrade {
    constructor(upgradeContainerName, cost) {
        this._upgradeContainer = document.getElementById(`${upgradeContainerName}`);
        this._upgradeCostDisplay = this._upgradeContainer.querySelector('p');
        this._upgradeButton = this._upgradeContainer.querySelector('button');

        this._upgradeCost = cost;
    }

    getUpgradeContainer() {
        return this._upgradeContainer;
    }
    
    getUpgradeCostDisplay() {
        return this._upgradeCostDisplay
    }

    getUpgradeButton() {
        return this._upgradeButton;
    }

    getCost() {
        return this._upgradeCost;
    }
}