import { useContext } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CMCard as Card } from "@/components/common/card";

import { nonGroundOptions } from "@/data/movement";
import { DesignContext } from "../../DesignContext";

function MovementCard() {
    const {
        design,
        adjustGroundSpeed,
        adjustNonGroundSpeed,
        setNonGroundMode,
        setJumpBooster,
        setPartialWing,
    } = useContext(DesignContext);

    const allowableNonGroundOptions = () => {
        return nonGroundOptions.filter(
            (option) =>
                option.allowedBodyType.includes(design.bodyType) &&
                option.allowedWeightClass.includes(design.weightClass) &&
                option.allowedTechBase.includes(design.techBase)
        );
    };

    const allowJumpBoosters = () => {
        return !(
            design.movement.nonGroundMode === "jump" &&
            design.movement.partialWing === false
        );
    };

    const allowPartialWing = () => {
        return !(
            design.movement.nonGroundMode === "jump" &&
            design.movement.jumpBooster === false
        );
    };

    return (
        <Card title="Movement">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ground">Ground</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustGroundSpeed(-1)}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        className="w-16 text-center"
                        name="ground"
                        type="number"
                        value={design.movement.ground}
                        min="1"
                        step="1"
                        readOnly
                    />
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustGroundSpeed(1)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <Separator />
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nonGroundMode">Non-Ground</Label>
                <Select
                    name="nonGroundMode"
                    value={design.movement.nonGroundMode}
                    onValueChange={(v) => setNonGroundMode(v)}
                    disabled={allowableNonGroundOptions().length <= 1}
                >
                    <SelectTrigger id="nonGroundMode">
                        <SelectValue placeholder="Select Non-Ground Mode" />
                    </SelectTrigger>
                    <SelectContent>
                        {allowableNonGroundOptions().map((option) => (
                            <SelectItem value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustNonGroundSpeed(-1)}
                        disabled={design.movement.nonGroundMode === "none"}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        className="w-16 text-center"
                        name="ground"
                        type="number"
                        value={design.movement.nonGround}
                        min="0"
                        step="1"
                        readOnly
                        disabled={design.movement.nonGroundMode === "none"}
                    />
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustNonGroundSpeed(1)}
                        disabled={design.movement.nonGroundMode === "none"}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="jumpBooster"
                        disabled={allowJumpBoosters()}
                        onCheckedChange={(value) => setJumpBooster(value)}
                    />
                    <label
                        htmlFor="jumpBooster"
                        className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                        Jump Booster
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="partialWing"
                        disabled={allowPartialWing()}
                        onCheckedChange={(value) => setPartialWing(value)}
                    />
                    <label
                        htmlFor="partialWing"
                        className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                        Partial Wing
                    </label>
                </div>
            </div>
        </Card>
    );
}

export { MovementCard };
