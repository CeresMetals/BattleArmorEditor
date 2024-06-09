import { Manipulators } from "@/types";

export const manipulators: Manipulators[] = [
    {
        value: "none",
        label: "None",
        weight: 0,
        mountInPairs: false,
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
        value: "modular",
        label: "Modular Equipment Adaptor",
        weight: 10,
        mountInPairs: false,
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
        value: "armored-glove",
        label: "Armored Glove",
        weight: 0,
        mountInPairs: false,
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
        value: "basic",
        label: "Basic Manipulator",
        weight: 0,
        mountInPairs: false,
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
        value: "basic-mine-clearance",
        label: "Basic Manipulator (w/ Mine Clearance)",
        weight: 15,
        mountInPairs: true,
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
        value: "battle-claw",
        label: "Battle Claw",
        weight: 15,
        mountInPairs: false,
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
        value: "battle-claw-magnets",
        label: "Battle Claw (w/ Magnets)",
        weight: 35,
        mountInPairs: true,
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
        value: "battle-claw-vibro",
        label: "Battle Claw (w/ Vibro-Claws)",
        weight: 50,
        mountInPairs: false,
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
        value: "cargo-lifter",
        label: "Cargo Lifter",
        weight: 30, // for every 0.5 ton (rounded up) of desired lifting capability
        mountInPairs: false,
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
        value: "heavy-battle-claw",
        label: "Heavy Battle Claw",
        weight: 20,
        mountInPairs: false,
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
        value: "heavy-battle-claw-magnets",
        label: "Heavy Battle Claw (w/ Magnets)",
        weight: 40,
        mountInPairs: true,
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
        value: "heavy-battle-claw-vibro",
        label: "Heavy Battle Claw (w/ Vibro-Claws)",
        weight: 60,
        mountInPairs: false,
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
        value: "industrial-drill",
        label: "Industrial Drill",
        weight: 30,
        mountInPairs: false,
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
        value: "salvage-arm",
        label: "Salvage Arm",
        weight: 30,
        mountInPairs: false,
        allowedBodyType: ["humanoid"],
        allowedWeightClass: [
            "exo",
            "light",
            "medium",
            "heavy",
            "assault",
        ],
        allowedTechBase: ["is", "clan"]
    }
];
