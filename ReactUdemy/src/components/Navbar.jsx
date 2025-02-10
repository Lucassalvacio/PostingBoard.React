import React from "react";
import classes from "../styles/Navbar.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage /> 
        React Poster
      </h1>
      <p>
        
        <Link className={classes.button} to="/new-post">
        <MdPostAdd size={16} />New Post
        </Link>
      </p>
    </header>
  );
};

export default Navbar;
