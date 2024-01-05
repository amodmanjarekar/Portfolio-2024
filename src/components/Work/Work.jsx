import React from "react";
import "./Work.css";
import { workList } from "./WorkData";
import { Link } from "react-router-dom";

export default function Work() {
  const WorkTitle = (props) => {
    const hoverController = (mouseEvent) => {
      const rect = mouseEvent.target.getBoundingClientRect();

      // x,y =
      // (pos wrt window) - (child margin) - (child dimensions / 2) / (child dimensions / 2)
      const mouseX =
        (mouseEvent.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const mouseY =
        (mouseEvent.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      mouseEvent.target.style.setProperty("--valX", mouseX * 40 + "px");
      mouseEvent.target.style.setProperty("--valY", mouseY * 20 + "px");
    };

    const hoverReset = (mouseEvent) => {
      mouseEvent.target.style.setProperty("--valX", 0 + "");
      mouseEvent.target.style.setProperty("--valY", 0 + "");
    };

    return (
      <Link className="a-clean" to={`/work/${props.link}`}>
        <div
          className="work-title"
          onMouseMove={(e) => {
            hoverController(e);
          }}
          onMouseLeave={(e) => {
            hoverReset(e);
          }}
        >
          {props.title}
        </div>
      </Link>
    );
  };

  return (
    <div className="work-container">
      <h1 className="title">Past Work</h1>
      {workList.map((work) => {
        return (
          <WorkTitle title={work.workMeta.workName} link={work.workMeta.link} />
        );
      })}
    </div>
  );
}
