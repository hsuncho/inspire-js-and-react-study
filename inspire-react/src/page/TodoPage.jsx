import {useState} from "react";

const TodoPage = () => {

    // 변수, 함수
    // let txt = '';

    const [txt, setTxt] = useState('');

    const btnHandler = (msg) => {
        console.log("[debug] >>> btn click", msg);
    }

    const txtHandler = (e) => {
        setTxt(e.target.value);
    }

    // template UI
    return (
        <div className="container">
            <h2>To-Do-List</h2>
            <form className="d-flex">
                <div className="flex-grow-1 mr-2">
                    <input className="form-control" 
                            type="text" 
                            placeholder="Input new todo" 
                            value={txt} 
                            onChange={txtHandler}/>
                </div>
                <div>
                    <button className="btn btn-primary" type="button" onClick={() => btnHandler(txt)}>Add</button>
                    </div>
            </form>
            입력된 데이터 출력하는 영역
        </div>
    )
};

export default TodoPage;