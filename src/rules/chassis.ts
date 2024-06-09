import { chassis } from "@/data/chassis";
import { BattleArmor } from "@/types";

export function getMinWeight(design: BattleArmor): number {
    const { weightClass } = design;

    return chassis[weightClass].minWeight;
}

export function getMaxWeight(design: BattleArmor): number {
    const { weightClass } = design;

    return chassis[weightClass].maxWeight;
}

export function getChassisWeight(design: BattleArmor): number {
    const {
        techBase,
        weightClass
    } = design;

    return chassis[weightClass].weight[techBase];
}
