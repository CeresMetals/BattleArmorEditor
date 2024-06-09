import { ArmorTypes } from "@/types";

export const armor: ArmorTypes[] = [
    {
        value: "standard",
        label: "Standard",
        weight: {
            clan: 25,
            is: 50,
        },
        slots: 0,
        allowedTechBase: ["is", "clan"],
    },
    {
        value: "standard-advanced",
        label: "Standard (Advanced)",
        weight: {
            is: 40,
        },
        slots: 5,
        allowedTechBase: ["is"],
    },
    {
        value: "standard-prototype",
        label: "Standard (Prototype)",
        weight: {
            is: 100,
        },
        slots: 4,
        allowedTechBase: ["is"],
    },
    {
        value: "stealth-basic",
        label: "Stealth (Basic)",
        weight: {
            clan: 30,
            is: 55,
        },
        slots: 3,
        allowedTechBase: ["is", "clan"],
    },
    {
        value: "stealth-improved",
        label: "Stealth (Improved)",
        weight: {
            clan: 35,
            is: 60,
        },
        slots: 5,
        allowedTechBase: ["is", "clan"],
    },
    {
        value: "stealth-prototype",
        label: "Stealth (Prototype)",
        weight: {
            is: 100,
        },
        slots: 4,
        allowedTechBase: ["is"],
    },
    {
        value: "stealth-standard",
        label: "Stealth (Standard)",
        weight: {
            clan: 35,
            is: 60,
        },
        slots: 4,
        allowedTechBase: ["is", "clan"],
    },
    {
        value: "fire-resistant",
        label: "Fire Resistant",
        weight: {
            clan: 30,
        },
        slots: 5,
        allowedTechBase: ["clan"],
    },
    {
        value: "mimetic",
        label: "Mimetic",
        weight: {
            is: 50,
        },
        slots: 7,
        allowedTechBase: ["is"],
    },
];
