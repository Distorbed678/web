import { ClickUpgrade } from "./clickUpgrade.js";
import { AutoClickAmountUpgrade } from "./autoClick/autoClickAmountUpgrade.js";
import { AutoClickDelayUpgrade } from "./autoClick/autoClickDelayUpgrade.js";
import { IncreaseCritMultiUpgrade } from "./critical/increaseCritMultiUpgrade.js";
import { IncreaseCritChanceUpgrade } from "./critical/increaseCritChanceUpgrade.js";

let A_Upgrades = [];

let click_Upgrade = new ClickUpgrade(
    "clickUpgrade",
    10
);
A_Upgrades.push(click_Upgrade);

let auto_Click_Amount_Upgrade = new AutoClickAmountUpgrade(
    "autoClickAmountUpgrade",
    100
);
A_Upgrades.push(auto_Click_Amount_Upgrade);

let auto_Click_Delay_Upgrade = new AutoClickDelayUpgrade(
    "autoClickDelayUpgrade",
    2500
);
A_Upgrades.push(auto_Click_Delay_Upgrade);

let increase_Crit_Chance_Upgrade = new IncreaseCritChanceUpgrade(
    "increaseCritChanceUpgrade",
    10000
);
A_Upgrades.push(increase_Crit_Chance_Upgrade);

let increase_Crit_Multi_Upgrade = new IncreaseCritMultiUpgrade(
    "increaseCritMultiUpgrade",
    25000
);
A_Upgrades.push(increase_Crit_Multi_Upgrade);

export {
    A_Upgrades,
    click_Upgrade,
    auto_Click_Amount_Upgrade,
    auto_Click_Delay_Upgrade,
    increase_Crit_Chance_Upgrade,
    increase_Crit_Multi_Upgrade
};