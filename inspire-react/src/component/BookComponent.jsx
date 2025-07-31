
function BookComponent(props) {
    return (
        <div>
            {/* <div>{`책 이름 : ${'처음 만난 리액트'}, 가격 : ${'10,000'}`}</div> */}
            {/* <div>{`책 이름 : ${props.name}, 가격 : ${props.price}`}</div> */}
            <div>책 이름 : {props.data.name}, 가격 : {props.data.price}</div>
        </div>
    );
}

export default BookComponent;