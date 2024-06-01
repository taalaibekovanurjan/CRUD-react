import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to={"/add"}> ADD NEW AUTHOR</NavLink>
        <NavLink to={"/todos"}>ALL AUTHORS</NavLink>
        <NavLink to={"/edit"}> EDIT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

// Name of author
// Info about author
// image

// like
