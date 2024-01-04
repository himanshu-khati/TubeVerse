import React from "react";
import CommentsList from "./CommentsList";
import { COMMENTS_DATA as commentsData } from "./utils/commentsData";

const CommentsContainer = () => {
  return (
    <div className="py-4 my-3 ">
      <h1 className=" text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mx-4">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
