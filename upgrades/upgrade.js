export class Upgrade {
    constructor(upgradeContainerName, cost) {
        this._upgradeContainer = document.getElementById(`${upgradeContainerName}`);
        this._upgradeCostDisplay = this._upgradeContainer.querySelector('p.UpgradeCostDisplay');
        this._upgradeButton = this._upgradeContainer.querySelector('button.UpgradeButton');
        this._upgradeValueDisplay = this._upgradeContainer.querySelector("p.upgradeValueDisplay");

        this._upgradeCost = cost;
    }

    getUpgradeContainer() {
        return this._upgradeContainer;
    }
    
    getUpgradeCostDisplay() {
        return this._upgradeCostDisplay;
    }

    getUpgradeButton() {
        return this._upgradeButton;
    }

    getCost() {
        return this._upgradeCost;
    }

    updateCostDisplay() {
        this._upgradeCostDisplay.innerHTML = `Cost: ${this._upgradeCost}`;
    }
}