import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const scrollController = () => {
    if (window.scrollY > 0) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  };

  window.addEventListener("scroll", scrollController);

  return (
    <div
      className={isNavVisible ? "nav-container" : "nav-container nav-inactive"}
    >
      <div className="nav">
        {/* <div className="logo">lo</div> */}
        <button
          className="navlink"
          onClick={() => {
            window.scrollTo({
              top: props.aboutnav,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          About
        </button>
        <button
          className="navlink"
          onClick={() => {
            window.scrollTo({
              top: props.worknav,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Work
        </button>
        {/* <button>Projects</button> */}
        {/* <button>Contact</button> */}
      </div>
    </div>
  );
}

export default Navbar;
