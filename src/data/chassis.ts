import { Chassis } from "@/types";

type BattleArmorChassis = {
    [key: string]: Chassis
};

export const chassis: BattleArmorChassis = {
    'exo': {
        slots: {
            arms: 2,
            body: 2,
            quad: null,
        },
        weight: {
            clan: 130,
            is: 80,
        },
        minWeight: 80,
        maxWeight: 400
    },
    'light': {
        slots: {
            arms: 2,
            body: 4,
            quad: 5,
        },
        weight: {
            clan: 150,
            is: 100,
        },
        minWeight: 401,
        maxWeight: 750
    },
    'medium': {
        slots: {
            arms: 3,
            body: 4,
            quad: 7,
        },
        weight: {
            clan: 250,
            is: 175,
        },
        minWeight: 751,
        maxWeight: 1000
    },
    'heavy': {
        slots: {
            arms: 3,
            body: 6,
            quad: 9,
        },
        weight: {
            clan: 400,
            is: 300,
        },
        minWeight: 1001,
        maxWeight: 1500
    },
    'assault': {
        slots: {
            arms: 4,
            body: 6,
            quad: 11,
        },
        weight: {
            clan: 700,
            is: 550,
        },
        minWeight: 1501,
        maxWeight: 2000
    }
};
