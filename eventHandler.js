import * as Upgrades from "./upgrades/upgrades.js"

Upgrades.click_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    Upgrades.click_Upgrade.onClick();
});

Upgrades.auto_Click_Amount_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    Upgrades.auto_Click_Amount_Upgrade.onClick();
});

Upgrades.auto_Click_Delay_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    Upgrades.auto_Click_Delay_Upgrade.onClick();
});

Upgrades.increase_Crit_Chance_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    Upgrades.increase_Crit_Chance_Upgrade.onClick();
});

Upgrades.increase_Crit_Multi_Upgrade.getUpgradeButton().addEventListener("click", (event) => {
    Upgrades.increase_Crit_Multi_Upgrade.onClick();
});