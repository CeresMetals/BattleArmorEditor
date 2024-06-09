export function clamp(num: number, min: number, max: number): number {
    return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
}
