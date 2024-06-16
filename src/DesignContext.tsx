import {
    createContext,
    useCallback,
    useState,
    useMemo,
    ReactNode,
} from "react";

import {
    TechBase,
    WeightClass,
    BodyType,
    BattleArmor,
    NonGroundMode,
} from "./types";

import { clamp } from "./rules/utils";

import { getMaxArmorPoints } from "./rules/armor";
import { updateDesign } from "./rules/design";

interface ContextProps {
    children?: ReactNode;
}

interface ContextProvider {
    design: BattleArmor;
    setTechBase: Function;
    setWeightClass: Function;
    setBodyType: Function;
    adjustGroundSpeed: Function;
    setNonGroundMode: Function;
    adjustNonGroundSpeed: Function;
    setJumpBooster: Function;
    setPartialWing: Function;
    setManipulator: Function;
    setArmorType: Function;
    adjustArmorPoints: Function;
}

const defaultDesign: BattleArmor = {
    techBase: "is",
    weightClass: "exo",
    bodyType: "humanoid",
    movement: {
        ground: 1,
        nonGround: 0,
        nonGroundMode: "none",
        jumpBooster: false,
        partialWing: false,
    },
    manipulators: {
        left: "none",
        leftModular: false,
        right: "none",
        rightModular: false,
    },
    armor: {
        type: "standard",
        points: 0,
    },
};

const DesignContext = createContext<ContextProvider>({
    design: defaultDesign,
    setTechBase: () => {},
    setWeightClass: () => {},
    setBodyType: () => {},
    adjustGroundSpeed: () => {},
    setNonGroundMode: () => {},
    adjustNonGroundSpeed: () => {},
    setJumpBooster: () => {},
    setPartialWing: () => {},
    setManipulator: () => {},
    setArmorType: () => {},
    adjustArmorPoints: () => {},
});

function updateNonGroundMode(design: BattleArmor, value: NonGroundMode) {
    const { movement } = design;

    return {
        movement: {
            ...movement,
            nonGroundMode: value,
            nonGround: 0,
        },
    };
}

const DesignContextProvider = ({ children }: ContextProps) => {
    const [design, setDesign] = useState(defaultDesign);

    const setTechBase = useCallback(
        (value: TechBase) => {
            const { design: updatedDesign } = updateDesign({
                techBase: value,
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setWeightClass = useCallback(
        (value: WeightClass) => {
            const { design: updatedDesign } = updateDesign({
                weightClass: value,
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setBodyType = useCallback(
        (value: BodyType) => {
            const { design: updatedDesign } = updateDesign({
                bodyType: value,
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setGroundSpeed = useCallback(
        (value: number) => {
            const { movement } = design;
            const { design: updatedDesign } = updateDesign({
                movement: {
                    ...movement,
                    ground: value,
                },
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const adjustGroundSpeed = useCallback(
        (value: number) => {
            let {
                movement: { ground },
            } = design;

            setGroundSpeed(ground + value);
        },
        [design]
    );

    const setNonGroundSpeed = useCallback(
        (value: number) => {
            const { movement } = design;

            const { design: updatedDesign } = updateDesign({
                movement: {
                    ...movement,
                    nonGround: value,
                },
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const adjustNonGroundSpeed = useCallback(
        (value: number) => {
            let {
                movement: { nonGround },
            } = design;

            setNonGroundSpeed(nonGround + value);
        },
        [design]
    );

    const setNonGroundMode = useCallback(
        (value: NonGroundMode) => {
            const movement = updateNonGroundMode(design, value);
            setDesign({
                ...design,
                ...movement,
            });
        },
        [design]
    );

    const setJumpBooster = useCallback(
        (value: boolean) => {
            const { movement } = design;
            const { design: updatedDesign } = updateDesign({
                movement: {
                    ...movement,
                    jumpBooster: value
                }
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setPartialWing = useCallback(
        (value: boolean) => {
            const { movement } = design;
            const { design: updatedDesign } = updateDesign({
                movement: {
                    ...movement,
                    partialWing: value
                }
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setManipulator = useCallback(
        (value: string, location: string) => {
            const {
                manipulators
            } = design;
            let newManipulators: any = {};
            newManipulators[location] = value;

            const { design: updatedDesign } = updateDesign({
                manipulators: {
                    ...manipulators,
                    ...newManipulators
                }
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setArmorType = useCallback(
        (value: string) => {
            const { armor } = design;
            const { design: updatedDesign } = updateDesign({
                armor: {
                    ...armor,
                    type: value,
                },
            }, design);

            setDesign(updatedDesign);
        },
        [design]
    );

    const setArmorPoints = useCallback(
        (value: number) => {
            const { armor, weightClass } = design;
            const maxArmor: number = getMaxArmorPoints(weightClass);

            const points = clamp(value, 0, maxArmor);
            setDesign({
                ...design,
                armor: {
                    ...armor,
                    points,
                },
            });
        },
        [design]
    );

    const adjustArmorPoints = useCallback(
        (value: number) => {
            let {
                armor: { points },
            } = design;

            setArmorPoints(points + value);
        },
        [design]
    );

    const contextValue: ContextProvider = useMemo(
        () => ({
            design,
            setTechBase,
            setWeightClass,
            setBodyType,
            adjustGroundSpeed,
            setNonGroundMode,
            adjustNonGroundSpeed,
            setJumpBooster,
            setPartialWing,
            setManipulator,
            setArmorType,
            adjustArmorPoints,
        }),
        [design]
    );

    return (
        <DesignContext.Provider value={contextValue}>
            {children}
        </DesignContext.Provider>
    );
};

export { DesignContext, DesignContextProvider };
