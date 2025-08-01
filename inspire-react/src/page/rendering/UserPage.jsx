import { useState } from "react";
import Greeting from "../../component/rendering/Greeting";
import LoginButton from "../../component/rendering/LoginButton";
import LogoutButton from "../../component/rendering/LogoutButton";

const UserPage = () => {
    const [isFlag, setIsFlag] = useState(false);

    return (
        <div>
        <Greeting isFlag={isFlag} />

        {
            // isFlag ? <LogoutButton onClick={() => setIsFlag(false)} /> : <LoginButton onClick={() => setIsFlag(true)} />
            isFlag ? <LogoutButton login={setIsFlag} /> : <LoginButton login={setIsFlag}/>
        }
        </div>

    );
}

export default UserPage;