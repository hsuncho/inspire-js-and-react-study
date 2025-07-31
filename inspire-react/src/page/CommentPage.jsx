import Comment from "../component/CommentComponent"

const comments = [
    {
        name : "hsun",
        comment : "리액트 재미있어요"
    },
    {
        name : "nahyeon",
        comment : "리액트 배워보고 싶어요"
    },
    {
        name : "yejin",
        comment : "리액트 어려워요"
    },
]

function CommentPage() {
    return (
        <div>
            {
                comments.map(comment => {
                    return (
                        <Comment data={comment} />
                    )
                })
            }
        </div>
    );
}

export default CommentPage;