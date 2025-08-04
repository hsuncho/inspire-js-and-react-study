import { useState } from "react";
import api from "../../api/axios";

const SignUpPage = () => {
    
    const [email, setEmail]   = useState('');
    const [passwd, setPasswd] = useState('');
    const [gender, setGender] = useState('');
    
    const emailHandler = (e) => {
        setEmail(e.target.value); 
        console.log("[debug] >>> email = " , email);        
    }
    const passwdHandler = (e) => {
        setPasswd(e.target.value); 
        console.log("[debug] >>> passwd = " , passwd);        
    }
    const genderHandler = (e) => {
        console.log("[debug] >>> gender = " , gender);
        setGender(e.target.value); 
    }
    const submitHandler = async (email, passwd, gender) => {
        console.log("[debug] >>> gender = " , email, passwd, gender);
        
        /*
        fetch api , axios 통신을 통해서 데이터를 전달받고 
        필요한 경우 화면 전환 및 전달받은 데이터를 
        props 전달 또는 
        context api 나 외부전역상태관리 라이브러리를 이용해서 공유할 수 있다. 
        */

        const data = {
            email : email,
            passwd : passwd,
            gender : gender
        }

        /*
        post : 입력
        get : 데이터 가져올 때
        put : 데이터 수정
        delete : 데이터 삭제
        */

        const response = await api.post('users', data);
        console.log("[debug] >>> axios /users post ");
        console.log("[debug] >>> response ", response);

    }
    return (
        <div>
            <form>
                <label>
                    이메일 :  
                    <input  type="text" 
                            placeholder="email"
                            value={email}
                            onChange={emailHandler} /><br/>
                    패스워드 :  
                    <input  type="text" 
                            placeholder="password"
                            value={passwd}
                            onChange={passwdHandler} /><br/>
                    성별 : 
                    <select value={gender}
                            onChange={genderHandler}>

                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <br/>
                <button type="button"
                        onClick={() => submitHandler(email, passwd, gender) }>로그인</button>
            </form>           
        </div>
    ) ;
}

export default SignUpPage ; 