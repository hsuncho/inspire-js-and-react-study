import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../ui/Button";
import api from "../../../api/axios";
import { useEffect, useState } from "react";
import TextArea from "../ui/TextArea";
import BlogCommentList from "../list/BlogCommentList";

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

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: ${spin} 1s linear infinite;
    margin: 100px auto;
`;

const BlogReadPage = () => {
    const { blogId } = useParams();
    console.log("[debug] >>> params blogId : ", blogId);
    const moveUrl = useNavigate();

    const [blog, setBlog] = useState({});

    const getBlog = async () => {
        // api get() 데이터 가져온 후 해당 제이터 state 상태로 만들어보자.
        // queryString : http://xxxxxxxxx/blogs?id=1
        // path variable : http://xxxxxxxx/1

        // api.get(`/blogs`, {
        //     params : {id : blogId}
        // })
        await api.get(`/blogs/${blogId}`)
            .then(response => {
                setBlog(response.data);
            })
            .catch(err => {
                console.log("[debug] >>> err ", err); 
            });
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <Wrapper>
            {!blog.id && <Spinner />}
            {blog.id && 
            <Container>
                <Button title="메인페이지 이동" btnHandler={() => {
                    moveUrl('/');
                }} />
                <PostContainer>
                    <TitleText>{blog.title}</TitleText>
                    <ContentText>{blog.content}</ContentText>
                </PostContainer>

                {/* 댓글 UI 설계 */}
                <CommentLabel>한 줄 댓글</CommentLabel>
                <BlogCommentList comments={blog.comments} />
                <TextArea height={40} />
                <Button title="댓글 작성" />
            </Container>
            }
        </Wrapper>
    );
};

export default BlogReadPage;

