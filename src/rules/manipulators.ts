import {
    manipulators
} from "../data/manipulator";

export function mountInPairs(type: string): boolean {
    const pairs = manipulators.filter((m) => m.value === type && m.mountInPairs);

    return pairs.length > 0;
}