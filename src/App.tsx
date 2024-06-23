import { DesignContextProvider } from "./DesignContext";

import { ChassisCard } from "./components/editor/chassis";
import { ManipulatorCard } from "./components/editor/manipulators";
import { MovementCard } from "./components/editor/movement";
import { ArmorCard } from "./components/editor/armor";
import { Statusbar } from "./components/editor/statusbar";

function App() {
    return (
        <DesignContextProvider>
            <div className="grid grid-cols-4 gap-2">
                <ChassisCard />
                <MovementCard />
                <ManipulatorCard />
                <ArmorCard />
                <Statusbar />
            </div>
        </DesignContextProvider>
    );
}

export default App;
