import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import BlogList from "../list/BlogList";
import { useEffect, useState } from "react";
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

const MainPage = () => {
    const moveUrl = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const [arr, setArr] = useState([]);
    const getData = async () => {
        // api 이용해서 통신 상태데이터로 할당
        await api.get('/blogs')
            .then(response => setArr(response.data))
            .catch( err => {
                    console.log("[debug] >>> ", err);
            });

    };

    return(
        <Wrapper>
            <Container>
                <Button title="글 작성하기" btnHandler={() => {
                    moveUrl("/blog-write");
                }} />
                <BlogList blogs={arr} />
            </Container>
        </Wrapper>
    );
}

export default MainPage;