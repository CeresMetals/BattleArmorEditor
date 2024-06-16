import { BattleArmor } from "@/types";
import { manipulators } from "../data/manipulator";

export function mountInPairs(type: string): boolean {
    const pairs = manipulators.filter(
        (m) => m.value === type && m.mountInPairs
    );

    return pairs.length > 0;
}

function findManipulatorWeight(manipulator: string): number {
    return manipulators.find((m) => m.value === manipulator)?.weight || 0;
}

export function getManipulatorWeight(design: BattleArmor): number {
    const {
        manipulators: { left, right },
    } = design;
    let weight = 0 + findManipulatorWeight(left) + findManipulatorWeight(right);

    return weight;
}
