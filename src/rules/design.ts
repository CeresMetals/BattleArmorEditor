import {
    BodyType,
    Manipulator,
    NonGroundMode,
    TechBase,
    WeightClass,
} from "@/data/constants";
import { BattleArmor } from "@/types";
import {
    getGroundMovementWeight,
    getMaxGroundMP,
    getMaxJumpMP,
    getMaxUmuMP,
    getMaxVtolMP,
    getMinGroundMP,
    getMinJumpMP,
    getMinUmuMP,
    getMinVtolMP,
    getNonGroundMovementWeight,
} from "./movement";
import { clamp } from "./utils";
import { getChassisWeight, getMaxWeight, getMinWeight } from "./chassis";

function validateTechBase(design: BattleArmor) {
    const {
        techBase,
        movement,
        movement: { nonGroundMode },
    } = design;
    let validatedDesign = design;

    /**
     * IS BattleArmor have limited alternate modes of movement. If one is
     * selected reset back to none.
     */
    if (
        techBase === TechBase.IS &&
        !(
            nonGroundMode === NonGroundMode.None ||
            nonGroundMode === NonGroundMode.Jump
        )
    ) {
        validatedDesign = {
            ...validatedDesign,
            movement: {
                ...movement,
                nonGroundMode: NonGroundMode.None,
                nonGround: 0,
            },
        };
    }

    return validatedDesign;
}

function validateWeightClass(design: BattleArmor) {
    const { bodyType, weightClass } = design;
    let validatedDesign = design;

    /**
     * PA(L)/Exoskeletons can not be quadrupeds. Reset to humanoid.
     */
    if (weightClass === WeightClass.Exo && bodyType === BodyType.Quad) {
        validatedDesign = {
            ...validatedDesign,
            bodyType: BodyType.Humanoid,
        };
    }

    return validatedDesign;
}

function validateBodyType(design: BattleArmor) {
    const { bodyType, weightClass, movement, manipulators } = design;
    let validatedDesign = design;

    /**
     * Quads can't be an PA(L) / Exoskeleton
     */
    if (bodyType === BodyType.Quad && weightClass === WeightClass.Exo) {
        validatedDesign = {
            ...validatedDesign,
            weightClass: WeightClass.Light,
        };
    }

    /**
     * Quadrupeds can't do any of the fun stuff
     */
    if (bodyType === BodyType.Quad) {
        validatedDesign = {
            ...validatedDesign,
            movement: {
                ...movement,
                nonGround: 0,
                nonGroundMode: NonGroundMode.None,
            },
            manipulators: {
                ...manipulators,
                left: Manipulator.None,
                right: Manipulator.None,
            },
        };
    }

    return validatedDesign;
}

function validateGroundMovement(design: BattleArmor) {
    const {
        movement,
        movement: { ground },
    } = design;
    let validatedDesign = design;

    /**
     * Clamp ground movement
     */
    const minMP = getMinGroundMP(validatedDesign);
    const maxMP = getMaxGroundMP(validatedDesign);

    if (minMP !== null && maxMP !== null) {
        const mp = clamp(ground, minMP, maxMP);
        validatedDesign = {
            ...validatedDesign,
            movement: {
                ...movement,
                ground: mp,
            },
        };
    }

    return validatedDesign;
}

function validateNonGroundMovement(design: BattleArmor) {
    const {
        movement,
        movement: { nonGroundMode, nonGround },
    } = design;
    let minMP: number | null = 0;
    let maxMP: number | null = 0;
    let validatedDesign = design;

    switch (nonGroundMode) {
        case "jump": {
            minMP = getMinJumpMP(validatedDesign);
            maxMP = getMaxJumpMP(validatedDesign);
            break;
        }
        case "vtol": {
            minMP = getMinVtolMP(validatedDesign);
            maxMP = getMaxVtolMP(validatedDesign);
            break;
        }
        case "umu": {
            minMP = getMinUmuMP(validatedDesign);
            maxMP = getMaxUmuMP(validatedDesign);
            break;
        }
    }

    if (minMP !== null && maxMP !== null) {
        const mp = clamp(nonGround, minMP, maxMP);
        validatedDesign = {
            ...validatedDesign,
            movement: {
                ...movement,
                nonGround: mp,
            },
        };
    }

    return validatedDesign;
}

function calculateWeight(design: BattleArmor) {
    const weight = {
        min: getMinWeight(design),
        max: getMaxWeight(design),
        current: 0,
    };

    weight.current =
        getChassisWeight(design) +
        getGroundMovementWeight(design) +
        getNonGroundMovementWeight(design);

    return weight;
}

export function updateDesign(design: BattleArmor) {
    const computedProperties = {
        weight: 0,
    };

    let validatedDesign = design;

    validatedDesign = validateTechBase(validatedDesign);
    validatedDesign = validateWeightClass(validatedDesign);
    validatedDesign = validateBodyType(validatedDesign);
    validatedDesign = validateGroundMovement(validatedDesign);
    validatedDesign = validateNonGroundMovement(validatedDesign);

    console.log(calculateWeight(validatedDesign));

    return {
        design: validatedDesign,
        computedProperties,
    };
}
