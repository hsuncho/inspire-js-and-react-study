import Button from "../ui/Button";
import TextArea from "../ui/TextArea";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
    :not(:last-child) {
    margin-bottom: 16px;
    }
    }
`;

const BlogWritePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const moveUrl = useNavigate();
    
    const saveHandler = async (title, content) => {
        const data = {title, content};
        await api.post(`/blogs`, data)
                .then( response => {
                    moveUrl('/' , {
                        state : response.data
                    });
                })
                .catch( err => {
                    console.log("[debug] >>> ", err);
                });
    }

    return(
        /*
        1. title, content는 훅을 사용해서 상태관리 해야함
        2. 버튼의 이벤트 발생 시 axios.js api를 이용해서 json-server post 통신을 하고
        데이터를 저장
        3. useNavigate()를 이용해서 라우터에 등록된 MainPage 이동
        */

        <Wrapper>
            <Container>
                <TextArea   value={title}
                            changeHandler={(e) => {
                                setTitle(e.target.value);
                            }}
                            height={20} />
                <TextArea   value={content}
                            changeHandler={(e) => {
                                setContent(e.target.value);
                            }}
                            height={480} />
                <Button title='작성글 저장'
                        btnHandler={(e) => saveHandler(title, content)} />
            </Container>
        </Wrapper>
    );
}

export default BlogWritePage;