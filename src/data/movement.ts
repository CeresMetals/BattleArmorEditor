import { BattleArmorEquipment } from "@/types";

export const GroundMovementQuad = {
    exo: {
        min: null,
        max: null,
        weight: 25, // kg
    },
    light: {
        min: 2,
        max: 5,
        weight: 30,
    },
    medium: {
        min: 2,
        max: 5,
        weight: 40,
    },
    heavy: {
        min: 2,
        max: 4,
        weight: 80,
    },
    assault: {
        min: 2,
        max: 4,
        weight: 160,
    },
};

export const GroundMovementHumanoid = {
    exo: {
        min: 1,
        max: 3,
        weight: 25, // kg
    },
    light: {
        min: 1,
        max: 3,
        weight: 30,
    },
    medium: {
        min: 1,
        max: 3,
        weight: 40,
    },
    heavy: {
        min: 1,
        max: 2,
        weight: 80,
    },
    assault: {
        min: 1,
        max: 2,
        weight: 160,
    },
};

export const JumpMovement = {
    exo: {
        max: 3,
        weight: 25
    },
    light: {
        max: 3,
        weight: 25
    },
    medium: {
        max: 3,
        weight: 50
    },
    heavy: {
        max: 2,
        weight: 125
    },
    assault: {
        max: 2,
        weight: 250
    }
};

export const VtolMovement = {
    exo: {
        max: 7,
        weight: 30
    },
    light: {
        max: 6,
        weight: 40
    },
    medium: {
        max: 5,
        weight: 60
    },
    heavy: {
        max: null,
        weight: 0
    },
    assault: {
        max: null,
        weight: 0
    }
};

export const UmuMovement = {
    exo: {
        max: 5,
        weight: 45
    },
    light: {
        max: 5,
        weight: 45
    },
    medium: {
        max: 4,
        weight: 85
    },
    heavy: {
        max: 3,
        weight: 160
    },
    assault: {
        max: 2,
        weight: 250
    }
};

export const nonGroundOptions: BattleArmorEquipment[] = [
    {
        value: "none",
        label: "None",
        allowedBodyType: ["humanoid", "quad"],
        allowedWeightClass: [
            "exo",
            "light",
            "medium",
            "heavy",
            "assault",
        ],
        allowedTechBase: ["is", "clan"]
    },
    {
        value: "jump",
        label: "Jump",
        allowedBodyType: ["humanoid"],
        allowedWeightClass: [
            "exo",
            "light",
            "medium",
            "heavy",
            "assault",
        ],
        allowedTechBase: ["is", "clan"]
    },
    {
        value: "vtol",
        label: "VTOL",
        allowedBodyType: ["humanoid"],
        allowedWeightClass: ["exo", "light", "medium"],
        allowedTechBase: ["clan"]
    },
    {
        value: "umu",
        label: "UMU",
        allowedBodyType: ["humanoid"],
        allowedWeightClass: [
            "exo",
            "light",
            "medium",
            "heavy",
            "assault",
        ],
        allowedTechBase: ["clan"]
    },
];
