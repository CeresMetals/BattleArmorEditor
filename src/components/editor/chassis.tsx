import { useContext } from "react";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CMCard as Card } from "@/components/common/card";

import { DesignContext } from "../../DesignContext";

function ChassisCard() {
    const {
        design,
        setTechBase,
        setWeightClass,
        setBodyType
    } = useContext(DesignContext);

    return (
        <Card title="Chassis">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="techBase">Tech Base</Label>
                <Select
                    name="techBase"
                    value={design.techBase}
                    onValueChange={(v) => setTechBase(v)}
                >
                    <SelectTrigger id="techBase">
                        <SelectValue placeholder="Select a Tech Base" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="is">Inner Sphere</SelectItem>
                        <SelectItem value="clan">Clan</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="weightClass">Weight Class</Label>
                <Select
                    value={design.weightClass}
                    onValueChange={(v) => setWeightClass(v)}
                >
                    <SelectTrigger id="weightClass">
                        <SelectValue placeholder="Select a Weight Class" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="exo">PA(L) / Exoskeleton</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="heavy">Heavy</SelectItem>
                        <SelectItem value="assault">Assault</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="techBase">Body Type</Label>
                <Select
                    name="bodyType"
                    value={design.bodyType}
                    onValueChange={(v) => setBodyType(v)}
                >
                    <SelectTrigger id="techBase">
                        <SelectValue placeholder="Select a Tech Base" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="humanoid">Humanoid</SelectItem>
                        <SelectItem value="quad">Quad</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </Card>
    );
}

export { ChassisCard };
