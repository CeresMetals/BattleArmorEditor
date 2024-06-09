export type TechBase = "is" | "clan";

export type WeightClass = "exo" | "light" | "medium" | "heavy" | "assault";

export type BodyType = "humanoid" | "quad";

export type NonGroundMode = "none" | "jump" | "vtol" | "umu";

export interface BattleArmorEquipment {
    value: string;
    label: string;
    allowedBodyType: BodyType[];
    allowedWeightClass: WeightClass[];
    allowedTechBase: TechBase[];
}

export interface Chassis {
    slots: {
        arms: number;
        body: number;
        quad: number | null;
    }
    weight: {
        clan: number;
        is: number;
    }
    minWeight: number;
    maxWeight: number;
}

export interface ArmorTypes {
    value: string;
    label: string;
    weight: {
        clan?: number;
        is?: number;
    }
    slots: number;
    allowedTechBase: TechBase[];
}

export interface Manipulators extends BattleArmorEquipment {
    weight: number; // mass per manipular
    weightMultiplier?: number; // specific for cargo lifter
    mountInPairs: boolean;
}

export type BattleArmor = {
    techBase: TechBase;
    weightClass: WeightClass;
    bodyType: BodyType;
    movement: {
        ground: number;
        nonGroundMode: NonGroundMode;
        nonGround: number;
        jumpBooster: boolean;
        partialWing: boolean;
    };
    manipulators: {
        left: string;
        leftModular: boolean;
        right: string;
        rightModular: boolean;
    },
    armor: {
        type: string;
        points: number;
    }
};
