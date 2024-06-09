import { useContext } from "react";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CMCard as Card } from "@/components/common/card";

import { DesignContext } from "../../DesignContext";
import { manipulators } from "@/data/manipulator";

function ManipulatorCard() {
    const {
        design,
        setManipulator
    } = useContext(DesignContext);

    const allowableManipulatorOptions = () => {
        return manipulators.filter(
            (option) =>
                option.allowedBodyType.includes(design.bodyType) &&
                option.allowedWeightClass.includes(design.weightClass) &&
                option.allowedTechBase.includes(design.techBase)
        );
    };

    return (
        <Card title="Manipulators">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="leftManipulator">Left</Label>
                <Select
                    name="leftManipulator"
                    value={design.manipulators.left}
                    onValueChange={(v) => setManipulator(v, 'left')}
                    disabled={allowableManipulatorOptions().length <= 1}
                >
                    <SelectTrigger id="leftManipulator">
                        <SelectValue placeholder="Select a Manipulator" />
                    </SelectTrigger>
                    <SelectContent>
                        {allowableManipulatorOptions().map((option) => (
                            <SelectItem value={option.value}>
                                {option.label}
                                {option.mountInPairs &&
                                    <>
                                        <span>&nbsp;</span>
                                        <Badge variant="secondary">Pair</Badge>
                                    </>
                                }
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {/*
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="leftModular"
                    onCheckedChange={(value) => console.log(value)}
                />
                <label
                    htmlFor="leftModular"
                    className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                >
                    Modular Equipment Adaptor
                </label>
            </div>

            <Separator />
            */}

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rightManipulator">Right</Label>
                <Select
                    name="rightManipulator"
                    value={design.manipulators.right}
                    onValueChange={(v) => setManipulator(v, 'right')}
                    disabled={allowableManipulatorOptions().length <= 1}
                >
                    <SelectTrigger id="rightManipulator">
                        <SelectValue placeholder="Select a Manipulator" />
                    </SelectTrigger>
                    <SelectContent>
                        {allowableManipulatorOptions().map((option) => (
                            <SelectItem value={option.value}>
                                {option.label}
                                {option.mountInPairs &&
                                    <>
                                        <span>&nbsp;</span>
                                        <Badge variant="secondary">Pair</Badge>
                                    </>
                                }
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {/*
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="rightModular"
                    onCheckedChange={(value) => console.log(value)}
                />
                <label
                    htmlFor="rightModular"
                    className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                >
                    Modular Equipment Adaptor
                </label>
            </div>
            */}
        </Card>
    );
}

export { ManipulatorCard };
