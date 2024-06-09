import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CMCardProps {
    children?: React.ReactNode,
    title: string
};

const CMCard = ({children, title}: CMCardProps) => <Card className="w-[350px]">
<CardHeader>
    <CardTitle>{title}</CardTitle>
</CardHeader>
<CardContent>
    <div className="grid w-full items-center gap-4">
        {children}
    </div>
</CardContent>
</Card>;

export { CMCard };
