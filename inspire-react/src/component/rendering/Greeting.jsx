import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
    const isFlag = props.isFlag;
    
    return isFlag ? <UserGreeting /> : <GuestGreeting />;
    
}

export default Greeting;