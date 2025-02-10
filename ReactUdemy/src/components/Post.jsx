import React from "react";
import classes from "../styles/Post.module.css";
import { MdDelete } from "react-icons/md";
import { Form, redirect, Link } from "react-router-dom";

const Post = ({ title, desc, id }) => {
  return (
    <>
      <div className={classes.post}>
        <Link to={"/posts/"+id} className={classes.link}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </Link>
        <Form method="post" action={"/posts/" + id + "/delete"}>
          <button type="submit">
            <MdDelete size={16} />
          </button>
        </Form>
      </div>
    </>
  );
};

export default Post;

export async function deletePost({ params }) {
  const id = params.id;
  try {
    const response = await fetch("http://localhost:8080/posts/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.log("Error deleting post: ", error);
  }
  return redirect("/");
}
