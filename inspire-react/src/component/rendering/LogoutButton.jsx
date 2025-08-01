
const LogoutButton = (props) => {

    const logoutHandler = (setIsFlag) => {
        setIsFlag( isFlag => isFlag = false );
    }

    return (
        <button type="button" onClick={() => logoutHandler(props.login)}>
            로그아웃
        </button>
    );
    
}

export default LogoutButton;