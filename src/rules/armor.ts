export function getMaxArmorPoints(weightClass: string): number {
    switch(weightClass) {
        case "exo":
            return 2;
        case "light":
            return 6;
        case "medium":
            return 10;
        case "heavy":
            return 14;
        case "assault":
            return 18;
        default:
            return 0;
    }
}