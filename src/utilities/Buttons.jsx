import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

export function BackBtn() {
  return (
    <Link to="/" className="backbtn">
      <span>&lt;-</span>
    </Link>
  );
}

export function PaginationBtnPrev(props) {
  return (
    <Link to={props.link} className="pgnbtn pgnbtn-prev">
      <span>Prev</span>
    </Link>
  );
}

export function PaginationBtnNext(props) {
  return (
    <Link to={props.link} className="pgnbtn pgnbtn-next">
      <span>Next</span>
    </Link>
  );
}
