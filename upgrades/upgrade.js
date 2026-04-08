export class Upgrade {
    constructor(upgradeContainerName) {
        this._upgradeContainer = document.getElementById(`${upgradeContainerName}`);
        this._upgradeCostDisplay = this._upgradeContainer.querySelector('p');
        this._upgradeButton = this._upgradeContainer.querySelector('button');
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
}