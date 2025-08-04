import { useContext } from "react";
import ctx from "./util/contextMode";

const ContextBody = () => {
    const {isMode} = useContext(ctx);

    return (
        <div style={{
                backgroundColor : isMode ? 'black' : 'white',
                color: isMode ? 'white' : 'black'
           }}>
            <div>
                <h1>
                    수강생 다들 파이팅!
                </h1>
            </div>
        </div>

    );
}

export default ContextBody;