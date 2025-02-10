import React, { useState } from "react";
import classes from "../styles/NewPost.module.css";
import Modal from "./Modal";
import { Form, redirect } from "react-router-dom";


const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
      <p>
          <label htmlFor="title">Post Title</label>
          <textarea id="title" name="title" />
        </p>
        <p>
          <label htmlFor="text">Text</label>

          <textarea id="desc" name="desc" required rows={3} />
        </p>
        
        <button type="submit">Submit</button>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  try {
    const response = await fetch("http://localhost:8080" + "/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to add post");
    }
  } catch (error) {
    console.log("Error adding post", error);
  }
  return redirect('/')
}
