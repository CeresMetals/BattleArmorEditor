import { DesignContextProvider } from "./DesignContext";

import { ChassisCard } from "./components/editor/chassis";
import { ManipulatorCard } from "./components/editor/manipulators";
import { MovementCard } from "./components/editor/movement";
import { ArmorCard } from "./components/editor/armor";

function App() {
    return (
        <DesignContextProvider>
            <div className="flex flex-row space-x-2">
                <ChassisCard />
                <MovementCard />
                <ManipulatorCard />
                <ArmorCard />
            </div>
        </DesignContextProvider>
    );
}

export default App;
