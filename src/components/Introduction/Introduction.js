import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div id="intro">
      <div data-aos="fade-up" className="section">
        <h4 className="section-title">About Me</h4>
        <h2 className="section-subtitle">About Me</h2>
      </div>
      <div className="intro__info">
        <div data-aos="fade-up" className="intro__info-left">
          <img src="assets/image/duc.jpg" alt="" />
        </div>
        <div data-aos="fade-up" className="intro__info-right">
          <p>Hi There! I'm Nguyen Duc</p>
          <h4>Web developer</h4>
          <h5>
            As a web developer, you will be responsible for implementing the
            design concepts and bringing them to life using coding languages
            such as HTML, CSS, and JavaScript. You may also work with frameworks
            and content management systems to develop interactive and dynamic
            web pages.
          </h5>
          <ul>
            <li>
              <span>Birthday</span> : <span>Jan 21, 2003</span>
            </li>
            <li>
              <span>Phone</span> : <span>+84 334-354-648</span>
            </li>
            <li>
              <span>Email</span> : <span>ducpd82@gmail.com</span>
            </li>
            <li>
              <span>From</span> : <span>Thua Thien Hue</span>
            </li>
          </ul>
          <div className="intro__cv">
            <a
              href="assets/image/NguyenDuc-DE170153.png"
              download="NguyenDuc-CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
