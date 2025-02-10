import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <div className="post_board">
          {posts.map((aPost) => (
            <Post
              key={aPost.id}
              id={aPost.id}
              title={aPost.title}
              desc={aPost.desc}
            />
          ))}
        </div>
      )}
      {posts.length === 0 && (
        <div>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
