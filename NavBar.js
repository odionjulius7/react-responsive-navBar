import React, { useState } from "react";
import "./Navbar.scss";

// to use material ui icon
// 1st, npm install @material-ui/core and then npm install @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleChange = () => {
    return setShowLinks((prevState) => !prevState);
  };
  //   console.log(showLinks);

  return (
    <div className="navbar">
      <div className="navbar__leftSide">
        <div className="navbar__links" id={showLinks ? "hidden" : ""}>
          <a href="home">Home</a>
          <a href="feedback">Feedback</a>
          <a href="about">About Us</a>
          <a href="contsct">Contact</a>
        </div>
        <button onClick={handleChange}>
          {showLinks ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className="navbar__rightSide">
        <input type="text" placeholder="Search..." />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
