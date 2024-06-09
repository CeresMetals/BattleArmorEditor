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
import { CMCard as Card } from "@/components/common/card";

import { armor } from "@/data/armor";
import { DesignContext } from "../../DesignContext";

function ArmorCard() {
    const {
        design,
        setArmorType,
        adjustArmorPoints
    } = useContext(DesignContext);

    const allowableArmorOptions = () => {
        return armor.filter((option) =>
            option.allowedTechBase.includes(design.techBase)
        );
    };

    return (
        <Card title="Armor">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="armorType">Armor</Label>
                <Select
                    name="armorType"
                    value={design.armor.type}
                    onValueChange={(v) => setArmorType(v)}
                >
                    <SelectTrigger id="armorType">
                        <SelectValue placeholder="Select Armor Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {allowableArmorOptions().map((option) => (
                            <SelectItem value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="armorPoints">Points</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustArmorPoints(-1)}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        className="w-16 text-center"
                        name="armorPoints"
                        type="number"
                        value={design.armor.points}
                        min="0"
                        step="1"
                        readOnly
                    />
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => adjustArmorPoints(1)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export { ArmorCard };
