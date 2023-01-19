import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "max-content",
    padding: "12px",
    margin: "10px",
    textDecoration: "none",
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bolder",
  };

function Navbar() {
    return (
      <div>
        <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Home</NavLink>
        <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue"}}>About</NavLink>
        <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Login</NavLink>
      </div>
    )
}

export default Navbar;