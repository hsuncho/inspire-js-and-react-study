import { useState, useEffect } from "react";

const StateSample = () => {

    const CAPACITY = 10;
    /*
    요구사항)
    - 입장인원이 꽉 차면 입장 버튼을 비활성화(disabled) 시키고
    - 퇴장버튼이 눌리면 인원을 감소시키는데 입장 인원이 0이면 버튼을 비활성화(disabled)
    */
    
    const [cnt, setCnt] = useState(0);
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const cntHandler = () => {
        setCnt(cnt + 1);
        // console.log("[debug] >>> cnt up btn click , ", cnt);

    }

    const DownHandler = () => {
        setCnt(cnt => cnt - 1);
        // console.log("[debug] >>> cnt up btn click , ", cnt);
    }

    // side effect
    useEffect(() => {
        console.log("[debug] useEffect");
        console.log("[debug] >>> cnt value , ", cnt);
        setIsFull( cnt >= CAPACITY );
        setIsEmpty( cnt <= 0 );
    }, [cnt] );

    return (
        <div>
            <p>{`입장인원 : ${cnt} 명`}</p>
            <button type="button" onClick={cntHandler} disabled={isFull}>입장</button>
            <button type="button" onClick={DownHandler} disabled={isEmpty}>퇴장</button>
            { isFull && <p style={{color : "red"}}>정원이 가득 찼습니다.</p> }
            {/* <button type="button" onClick={cntHandler} disabled={cnt >= CAPACITY}>입장</button> */}
            {/* <button type="button" onClick={DownHandler} disabled={cnt <= 0}>퇴장</button> */}
        </div>
    );
}

export default StateSample;