import { useContext } from "react";
import { Label } from "../ui/label";
import { DesignContext } from "@/DesignContext";
import { getComputedValues } from "@/rules/design";

function Statusbar() {
    const { design } = useContext(DesignContext);
    const { weight: { current, max } } = getComputedValues(design);

    const remaining = max - current;

    return (
        <div className="col-span-4">
            <Label className="pr-1">Weight</Label>
            <span className="text-green-600">{current}</span>
            <span className="pr-4">kg</span>

            <Label className="pr-1">Remaining</Label>
            <span className={`${remaining >= 0 ? 'text-green-600' : 'text-red-600' }`}>{remaining}</span>
            <span>kg</span>
        </div>
    );
}

export { Statusbar };
