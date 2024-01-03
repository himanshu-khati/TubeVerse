import Comment from "./Comment";
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className=" border-l-2 border-gray-200 ms-5 ">
        <CommentsList key={comment.replies.id} comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentsList;
