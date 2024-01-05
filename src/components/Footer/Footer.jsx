import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [viewDiscord, setViewDiscord] = useState("Discord");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <>
      <div className="footer-container">
        <div className="footer-linklist">
          <h2>Find me Elsewhere</h2>
          <ul>
            <li>
              <a href="https://github.com/amodmanjarekar">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amod-manjarekar">Linkedin</a>
            </li>
            <li>
              <a href="https://leetcode.com/cs_/">Leetcode</a>
            </li>
          </ul>
        </div>
        <div className="footer-linklist">
          <h2>Contact me</h2>
          <ul>
            <li>
              <a href="mailto:amodm.1102@google.com">Write a mail</a>
            </li>
            <li
              onMouseOver={() => {
                setViewDiscord("cskies_");
              }}
              onMouseOut={() => {
                setViewDiscord("Discord");
              }}
              onTouchStart={async () => {
                setViewDiscord("cskies_");
                await delay(3000);
                setViewDiscord("Discord");
              }}
            >
              <span
                style={
                  setViewDiscord === "Discord" ? { userSelect: "none" } : {}
                }
                className="dummy-a"
              >
                {viewDiscord}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="endtext">
        <div>
          Made by Amod Manjarekar | Find the source code&nbsp;
          <a href="https://github.com/amodmanjarekar/Portfolio-2024">here</a>.
        </div>
      </div>
    </>
  );
}

export default Footer;
