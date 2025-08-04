import { useState } from "react";
import ctx from "../component/context/util/contextMode";
import ContextPage from "./context/ContextPage";

const ContextApp = () => {
    const [isMode, setIsMode] = useState(false);
    return (
        <div>
            <ctx.Provider value={{isMode, setIsMode}}>
                <ContextPage />
            </ctx.Provider>
        </div>
    );
}

export default ContextApp;