import Greeting from "../../component/rendering/Greeting";

const UserPage = () => {
    const isFlag = true;

    return (
        <Greeting isFlag={isFlag} />
    );
}

export default UserPage;