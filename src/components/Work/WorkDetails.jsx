import React, { Suspense, useEffect, useState } from "react";
import { workList } from "./WorkData";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BackBtn,
  PaginationBtnNext,
  PaginationBtnPrev,
} from "../../utilities/Buttons";

import MonitorScreen from "../../assets/work/scr-monitor.png";
import LaptopScreen from "../../assets/work/scr-laptop.png";
import MobileScreen from "../../assets/work/scr-mobile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faLaptop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { RoundSpinner } from "../../utilities/Spinners";

function WorkDetails() {
  const [work, setWork] = useState({});
  const [workIndex, setWorkIndex] = useState(0);
  const selectedWork = useParams().workId;

  const [selectedScreen, setSelectedScreen] = useState("Desktop");

  useEffect(() => {
    window.scrollTo(0, 0);

    workList.forEach((e, i) => {
      if (e.workMeta.link === selectedWork) {
        setWork(e);
        setWorkIndex(i);
      }
    });
  }, []);

  const renderScreen = () => {
    if (selectedScreen === "Desktop") {
      return (
        <div className="work-screen-desktop">
          <img src={MonitorScreen} alt="screen" style={{ width: "850px" }} />
          <img
            className="screenimg"
            src={`/assets/work/${work.desktop}`}
            alt="screen"
            style={{ top: "31px", left: "79px", width: "698px" }}
          />
        </div>
      );
    } else if (selectedScreen === "Laptop") {
      return (
        <div className="work-screen-laptop">
          <img src={LaptopScreen} alt="screen" style={{ width: "900px" }} />
          <img
            className="screenimg"
            src={`/assets/work/${work.laptop}`}
            alt="screen"
            style={{ top: "163px", left: "195px", width: "508px" }}
          />
        </div>
      );
    } else if (selectedScreen === "Mobile") {
      return (
        <div className="work-screen-mobile">
          <img
            className="screenimg"
            src={`/assets/work/${work.mobile}`}
            alt="screen"
            style={{
              top: "88px",
              left: "57px",
              width: "238px",
              zIndex: "-1",
            }}
          />
          <img src={MobileScreen} alt="screen" style={{ width: "350px" }} />
        </div>
      );
    } else return <>Error!</>;
  };

  const getMargin = () => {
    if (selectedScreen === "Desktop") return "0%";
    if (selectedScreen === "Laptop") return "33%";
    if (selectedScreen === "Mobile") return "67%";
    return "0%";
  };

  return (
    <>
      <motion.div
        // initial={{ scaleY: 0 }}
        // animate={{ scaleY: 1 }}
        // exit={{ scaleY: 0 }}
        className="work-details"
      >
        <div className="work-header">
          <div>
            <div className="work-metabox">
              <h3>Organization</h3>
              {work.org}
            </div>
            <div className="work-metabox">
              <h3>Year</h3>
              {work.year}
            </div>
            <div className="work-metabox">
              <h3>Stack</h3>
              {work.stack}
            </div>
          </div>
          <div>
            <h1>{work.title}</h1>
            <p>{work.desc}</p>
          </div>
        </div>
        <div className="work-main">
          <img
            src={`/assets/work/${work.cover}`}
            className="img-org"
            alt="mainimg"
          />
          <div className="work-subtext">
            <div>{work.task}</div>
            <div>{work.work}</div>
          </div>
          <div className="img-home">
            <img src={`/assets/work/${work.main}`} alt="homepage" />
          </div>
          <div className="work-endtext">
            <div>
              {work.effect} <br />
              <a href={work.hplink} target="_blank" rel="noreferrer">
                {work.hplink}
              </a>
            </div>
          </div>
        </div>
        <div className="work-responsive">
          <Suspense fallback={<RoundSpinner />}>
            <div className="work-screens">{renderScreen()}</div>
          </Suspense>
          <div className="work-screenselectors">
            <div className="work-buttons">
              <div className="btn-bg" style={{ left: `${getMargin()}` }}></div>
              <button
                onClick={() => {
                  setSelectedScreen("Desktop");
                }}
              >
                <FontAwesomeIcon icon={faDesktop} />
              </button>
              <button
                onClick={() => {
                  setSelectedScreen("Laptop");
                }}
              >
                <FontAwesomeIcon icon={faLaptop} />
              </button>
              <button
                onClick={() => {
                  setSelectedScreen("Mobile");
                }}
              >
                <FontAwesomeIcon icon={faMobileAlt} />
              </button>
            </div>
          </div>
        </div>
        <div className="work-footer">
          <PaginationBtnPrev
            link={
              workIndex - 1 < 0
                ? "/"
                : `/work/${workList[workIndex - 1].workMeta.link}`
            }
          />
          <div
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="work-totop"
          >
            To top
          </div>
          <PaginationBtnNext
            link={
              workIndex + 1 > workList.length - 1
                ? "/"
                : `/work/${workList[workIndex + 1].workMeta.link}`
            }
          />
        </div>
      </motion.div>
      <BackBtn />
      <motion.div
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        className="transitioner transitioner-work"
      />
    </>
  );
}

export default WorkDetails;
