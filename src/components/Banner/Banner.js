import React from "react";
import "./Banner.css";

function Banner({ menuOpen, setMenuOpen }) {
  return (
    <div id="banner">
      <div className={"navbar " + (menuOpen && "active")}>
        <div className="banner__logo">
          <img src="assets/image/dev.jpg" alt="" />
          <p>MathNumber</p>
        </div>
        <ul>
          <li>
            <a href="#banner">Home</a>
          </li>
          <li>
            <a href="#intro">About</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar__container">
          <div
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="banner__img">
        <img src="assets/image/background.jpg" alt="" />
        <div className="banner__info">
          <p>Nguyen Duc</p>
          <p>Web developer - Software engineering</p>
        </div>
        <div class="banner__detail">
          <a href="#intro">
            <button>Detail</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
