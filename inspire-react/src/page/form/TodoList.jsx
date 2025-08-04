import { Link, useLocation } from "react-router-dom";

const TodoList = () => {

    const location = useLocation();
    const arr = location.state;
    console.log("[debug] >>> todo location.state" , arr );

    return (
        <div>
            <Link to="/">첫 화면 이동</Link>
            <hr />
            <ol>
                {
                    arr.map( (todo) => {
                        return <li key={todo.id}>{todo.content}</li>
                    })
                }
            </ol>
        </div>      
    );

}

export default TodoList;