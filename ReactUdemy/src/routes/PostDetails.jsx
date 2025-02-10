import React from "react";
import { useLoaderData, Link} from "react-router-dom";
import Modal from "../components/Modal";
import classes from "../styles/PostDetails.module.css";

const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Couldn't fint Post</h1>
          <p>Unfortunately, the requested post could not be found</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>{post.title}</p>
        <p className={classes.desc}>{post.desc}</p>
      </main>
    </Modal>
  );
};

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
