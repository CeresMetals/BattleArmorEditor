import {
    GroundMovementHumanoid,
    GroundMovementQuad,
    JumpMovement,
    UmuMovement,
    VtolMovement,
} from "@/data/movement";
import { BattleArmor } from "../types";

export function getMinGroundMP(design: BattleArmor): number | null {
    const { bodyType, weightClass } = design;

    return bodyType === "quad"
        ? GroundMovementQuad[weightClass].min
        : GroundMovementHumanoid[weightClass].min;
}

export function getMaxGroundMP(design: BattleArmor): number | null {
    const { bodyType, weightClass } = design;

    return bodyType === "quad"
        ? GroundMovementQuad[weightClass].max
        : GroundMovementHumanoid[weightClass].max;
}

export function getMinJumpMP(design: BattleArmor): number | null {
    const { bodyType } = design;

    if (bodyType === "quad") {
        return null;
    }

    return 0;
}

export function getMaxJumpMP(design: BattleArmor): number | null {
    const { bodyType, weightClass } = design;

    if (bodyType === "quad") {
        return null;
    }

    return JumpMovement[weightClass].max;
}

export function getMinVtolMP(design: BattleArmor): number | null {
    const { bodyType, techBase } = design;

    if (techBase === "is" || bodyType === "quad") {
        return null;
    }

    return 0;
}

export function getMaxVtolMP(design: BattleArmor): number | null {
    const { bodyType, techBase, weightClass } = design;

    if (techBase === "is" || bodyType === "quad") {
        return null;
    }

    return VtolMovement[weightClass].max;
}

export function getMinUmuMP(design: BattleArmor): number | null {
    const { bodyType, techBase } = design;

    if (techBase === "is" || bodyType === "quad") {
        return null;
    }

    return 0;
}

export function getMaxUmuMP(design: BattleArmor): number | null {
    const { bodyType, techBase, weightClass } = design;

    if (techBase === "is" || bodyType === "quad") {
        return null;
    }

    return UmuMovement[weightClass].max;
}

export function getGroundMovementWeight(design: BattleArmor): number {
    const {
        bodyType,
        weightClass,
        movement: { ground },
    } = design;

    const weightPerMP =
        bodyType === "quad"
            ? GroundMovementQuad[weightClass].weight
            : GroundMovementHumanoid[weightClass].weight;

    const minMP = getMinGroundMP(design);

    if (minMP !== null) {
        return (ground - minMP) * weightPerMP;
    }

    return 0;
}

export function getNonGroundMovementWeight(design: BattleArmor): number {
    const {
        weightClass,
        movement: { nonGround, nonGroundMode },
    } = design;

    let minMP: number | null = 0;
    let weightPerMP = 0;

    switch (nonGroundMode) {
        case "jump": {
            minMP = getMinJumpMP(design);
            weightPerMP = JumpMovement[weightClass].weight;
            break;
        }
        case "vtol": {
            minMP = getMinVtolMP(design);
            weightPerMP = VtolMovement[weightClass].weight;
            break;
        }
        case "umu": {
            minMP = getMinUmuMP(design);
            weightPerMP = UmuMovement[weightClass].weight;
            break;
        }
    }

    if (minMP !== null) {
        return (nonGround - minMP) * weightPerMP;
    }

    return 0;
}

// Jump Booster (Both)
// Partial Wing (IS)
