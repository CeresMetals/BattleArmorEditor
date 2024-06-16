import { armor } from "@/data/armor";
import { BattleArmor, TechBase } from "@/types";

export function getMaxArmorPoints(weightClass: string): number {
    switch (weightClass) {
        case "exo":
            return 2;
        case "light":
            return 6;
        case "medium":
            return 10;
        case "heavy":
            return 14;
        case "assault":
            return 18;
        default:
            return 0;
    }
}

function findArmorPointWeight(type: string, techBase: TechBase): number {
    return armor.find((a) => a.value === type)?.weight[techBase] || 0;
}

export function getArmorWeight(design: BattleArmor): number {
    const {
        techBase,
        armor: { points, type },
    } = design;

    return points * findArmorPointWeight(type, techBase) || 0;
}
