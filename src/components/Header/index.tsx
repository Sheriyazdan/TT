import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
        <span>Test task</span>
      </div>
    </header>
  );
};

export default Header;
