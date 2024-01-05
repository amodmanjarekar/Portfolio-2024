import React, { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faRust,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const [isProfileInView, setIsProfileInView] = useState(false);
  const [minY, setMinY] = useState(675);
  const [maxY, setMaxY] = useState(1600);
  const [isSkillsOn, setIsSkillsOn] = useState(false); // mobile

  useEffect(() => {
    if (window.screen.width < 786) {
      setMinY(375);
      setMaxY(975);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > minY && window.scrollY < maxY
        ? setIsProfileInView(true)
        : setIsProfileInView(false);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const svgEnter = () => {
    gsap.fromTo(
      ".svg-profile",
      {
        y: 400,
      },
      {
        duration: 0.5,
        y: 0,
      }
    );
  };

  const svgExit = () => {
    gsap.fromTo(
      ".svg-profile",
      {
        y: 0,
      },
      {
        duration: 0.5,
        y: 400,
      }
    );
  };

  useLayoutEffect(() => {
    !isProfileInView ? svgExit() : svgEnter();
  }, [isProfileInView]);

  useLayoutEffect(() => {
    // Blink
    const blinkGap = 3;
    const blinkDur = 0.1;

    gsap.set(".svg-eyes-closed", {
      display: "block",
      delay: 2,
      repeat: -1,
      repeatDelay: blinkGap,
    });
    gsap.set(".svg-eyes-open", {
      display: "none",
      delay: 2,
      repeat: -1,
      repeatDelay: blinkGap,
    });
    gsap.set(".svg-eyes-closed", {
      display: "none",
      delay: 2 + blinkDur,
      repeat: -1,
      repeatDelay: blinkGap,
    });
    gsap.set(".svg-eyes-open", {
      display: "block",
      delay: 2 + blinkDur,
      repeat: -1,
      repeatDelay: blinkGap,
    });
  }, []);

  const inTL = () => {
    // Hand
    gsap.to(".svg-hand", { duration: 0.5, y: -200 });
    gsap.to(".svg-hand", { duration: 0.5, y: 0, delay: 0.5 });

    // Glasses
    gsap.to(".svg-glasses", {
      duration: 0.1,
      y: -5,
      fillOpacity: 1,
      delay: 0.4,
    });

    // Mouth
    gsap.set(".svg-mouth-closed", {
      height: 20,
      display: "none",
      delay: 0.4,
    });
    gsap.set(".svg-mouth-open", {
      height: 20,
      display: "block",
      delay: 0.4,
    });
  };

  const outTL = () => {
    // Glasses
    gsap.to(".svg-glasses", {
      duration: 0.2,
      y: 0,
      fillOpacity: 0.25,
      delay: 0.6,
    });

    // Mouth
    gsap.set(".svg-mouth-closed", {
      height: 20,
      display: "block",
      delay: 0.6,
    });
    gsap.set(".svg-mouth-open", {
      height: 20,
      display: "none",
      delay: 0.6,
    });
  };

  const Profile = () => {
    return (
      <div className="profile">
        <svg viewBox="0 0 350 350" onMouseEnter={inTL} onMouseLeave={outTL}>
          <defs id="defs2" />
          <g className="svg-profile">
            <g className="svg-body">
              <ellipse
                style={{
                  fill: "#333333",
                  fillOpacity: "1",
                  fillRule: "evenodd",
                  strokeWidth: "0.856363",
                }}
                id="path31"
                cx="175"
                cy="350"
                rx="100"
                ry="50"
              />
              <path
                style={{
                  fill: "#f1c27d",
                  stroke: "none",
                  strokeWidth: "1px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                  fillOpacity: "1",
                }}
                d="M 150,320 V 175 c 0,-35 50,-35 50,0 v 145 c 0,25 -50,25 -50,0 z"
                id="path1324"
              />
              <path
                style={{
                  fill: "#d1a563",
                  fillOpacity: "1",
                  stroke: "none",
                  strokeWidth: "1px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                }}
                d="m 150,273 v -99 c 0,-35 50,-35 50,0 v 99 c 0,5 -21,11 -25,10.75 C 171,283.5 150,278 150,273 Z"
                id="path1879"
              />
              <circle
                style={{ fill: "#f1c27d", fillOpacity: "1", stroke: "none" }}
                id="path3697"
                cx="100"
                cy="190"
                r="15"
              />
              <circle
                style={{ fill: "#f1c27d", fillOpacity: "1", stroke: "none" }}
                id="path3697-6"
                cx="250"
                cy="190"
                r="15"
              />
            </g>
            <g className="svg-head">
              <path
                style={{
                  fill: "#f1c27d",
                  fillOpacity: "1",
                  stroke: "none",
                  strokeWidth: "1.27957px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                }}
                d="m 105,210 -5,-50 h 150 l -5,50 c 0,26.70381 -60,40.08305 -70,39.99961 C 165,249.91621 105,236.70381 105,210 Z"
                id="path4372"
              />
              <circle
                style={{
                  fill: "#f1c27d",
                  fillOpacity: "1",
                  stroke: "none",
                  strokeWidth: "0.9375",
                }}
                id="path3467"
                cx="175"
                cy="159"
                r="75"
              />
              <path
                style={{
                  fill: "#222222",
                  fillOpacity: "1",
                  stroke: "none",
                  strokeWidth: "0.991631px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                }}
                d="m 105,186 5,-59 c 0,0 -15,0 -15,14.75 0,14.75 10,44.25 10,44.25 z"
                id="path3866"
              />
              <path
                style={{ fill: "#222222", fillOpacity: "1", stroke: "none" }}
                d="m 245,186 -5,-59 c 0,0 15,0 15,14.75 0,14.75 -10,44.25 -10,44.25 z"
                id="path3866-7"
              />
              <path
                style={{ fill: "#222222", stroke: "none" }}
                d="m 250,135 c 0,0 20,-35 5,-50 C 240,70 170,15 120,55 70,95 90,160 90,160 c 0,0 0,-25 15,-30 15,-5 145,5 145,5 z"
                id="path4244"
              />
              <path
                style={{ fill: "#222222", fillOpacity: "1", stroke: "none" }}
                d="m 110,155 c 0,0 10,-30 90,-25 80,5 -85,-25 -85,-25 0,0 -15,20 -5,50 z"
                id="path4318"
              />
            </g>
            <g className="svg-face">
              <g className="svg-eyes-open">
                <ellipse
                  style={{ fill: "#222222", fillOpacity: "1", stroke: "none" }}
                  id="path4710"
                  cx="140"
                  cy="170"
                  rx="5"
                  ry="10"
                />
                <ellipse
                  style={{ fill: "#222222", fillOpacity: "1", stroke: "none" }}
                  id="path4710-3"
                  cx="210"
                  cy="170"
                  rx="5"
                  ry="10"
                />
              </g>
              <g className="svg-eyes-closed" display="none">
                <path
                  style={{
                    stroke: "#222222",
                    fill: "none",
                    strokeWidth: "3px",
                  }}
                  d="m 135,172 q 5,5 10,0"
                />
                <path
                  style={{
                    stroke: "#222222",
                    fill: "none",
                    strokeWidth: "3px",
                  }}
                  d="m 205,172 q 5,5 10,0"
                />
              </g>
              <g className="svg-mouth-open" display="none">
                <path
                  style={{ fill: "#222222", fillOpacity: "1", stroke: "none" }}
                  d="m 150,200 h 50 c 0,0 0,20 -25,20 -25,0 -25,-20 -25,-20 z"
                  id="path4956"
                />
                <path
                  style={{ fill: "#ffffff", fillOpacity: "1", stroke: "none" }}
                  d="m 152.77778,200 h 44.44444 c 0,0 4.44445,5 -22.22222,5 -26.66667,0 -22.22222,-5 -22.22222,-5 z"
                  id="path6211"
                />
              </g>
              <g className="svg-mouth-closed">
                <path
                  style={{
                    stroke: "#222222",
                    fill: "none",
                    strokeWidth: "1px",
                  }}
                  d="m 150,210 q 25,8 50,0"
                  id="path-mc"
                />
              </g>
            </g>
            <g>
              <path
                className="svg-glasses"
                style={{
                  fill: "#ffffff",
                  stroke: "#000000",
                  strokeWidth: "1px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                  fillOpacity: "0.25",
                }}
                d="m 105,173 h 10 v -5 c 0,0 0,-5 5,-5 5,0 40,0 40,0 0,0 5,0 5,5 0,5 0,5 0,5 h 20 v -5 c 0,0 0,-5 5,-5 5,0 40,0 40,0 0,0 5,0 5,5 0,5 0,5 0,5 h 10 -10 v 10 c 0,0 0,5 -5,5 -5,0 -40,0 -40,0 0,0 -5,0 -5,-5 0,-5 0,-10 0,-10 h -20 v 10 c 0,0 0,5 -5,5 -5,0 -40,0 -40,0 0,0 -5,0 -5,-5 0,-5 0,-10 0,-10 z"
                id="path6833"
              />
            </g>
            <g className="svg-hand">
              <path
                style={{
                  fill: "#f1c27d",
                  fillOpacity: "1",
                  stroke: "#000000",
                  strokeWidth: "1px",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: "1",
                }}
                d="M 180,365.96076 V 396 h 29.40557 c 0,0 9.80186,0 9.80186,10.01308 v 26.03399 c 0,5.00654 0,5.00654 -4.90093,5.00654 V 561.2158 H 175.09907 V 437.05361 c -4.90094,0 -4.90094,0 -4.90094,-5.00654 v -66.08631 c 0,-5.00654 9.80187,-5.00654 9.80187,0 z"
                id="path7329-5"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  };

  const renderWA = () => {
    return (
      <>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faHtml5} />
          <label>HTML5</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faCss3} />
          <label>CSS</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faJs} />
          <label>Javascript</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faReact} />
          <label>Reactjs</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faNodeJs} />
          <label>Node.js</label>
        </div>
        <div className="skills-icon">
          <img
            style={{ width: "0.8em" }}
            src="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"
            alt="flutter-logo"
          />
          <label>Flutter</label>
        </div>
        <div className="skills-icon">
          <img
            style={{ width: "1em" }}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"
            alt="dart-logo"
          />
          <label>Dart</label>
        </div>
      </>
    );
  };

  const renderGS = () => {
    return (
      <>
        <div className="skills-icon">
          <img
            style={{ width: "0.85em" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"
            alt="csharp-logo"
          />
          <label>C#</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faRust} />
          <label>Rust</label>
        </div>
        <div className="skills-icon">
          <FontAwesomeIcon icon={faUnity} />
          <label>Unity</label>
        </div>
        <div className="skills-icon">
          <img
            style={{ width: "1em" }}
            src="https://godotengine.org/assets/press/icon_monochrome_dark.svg"
            alt="godot-logo"
          />
          <label>Godot</label>
        </div>
      </>
    );
  };

  return (
    <div className="about-container">
      <div className="about">
        <div className="about-box info">
          <Profile />
          <p>
            Hi. <br />I am{" "}
            <span
              class="text-highlighted"
              onMouseEnter={inTL}
              onMouseLeave={outTL}
            >
              Amod Manjarekar
            </span>
            . I am a full-stack web developer and an aspiring game developer.
            <br />I like developing fun & complex designs, maintaining
            documentations, writing clean code, and listening to music.
          </p>
        </div>
        <div
          className="about-box skills"
          onMouseEnter={inTL}
          onMouseLeave={outTL}
        >
          <div className="skills-header">
            <h2>SKILLS</h2>
          </div>
          <div className="skills-main">
            <div className="skills-container">
              <h3>Web/App Development</h3>
              <div className="skills-icons">{renderWA()}</div>
            </div>
            <div className="skills-container">
              <h3>Game Developent / Systems Programming</h3>
              <div className="skills-icons">{renderGS()}</div>
            </div>
          </div>
        </div>
        <div className="skills-mob">
          <div
            className="skills-toggle"
            onTouchStart={() => {
              isSkillsOn ? outTL() : inTL();
              setIsSkillsOn(!isSkillsOn);
            }}
          >
            SKILLS
          </div>
          <div
            className="skills-mob-main"
            style={
              isSkillsOn
                ? { transform: "translateY(-240px)" }
                : { transform: "translateY(0px)" }
            }
          >
            <div className="skills-icons-grid">
              <h3>Web/App Development</h3>
              <h3>Game Developent / Systems Programming</h3>
              <div className="skills-icons">{renderWA()}</div>
              <div className="skills-icons">{renderGS()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
