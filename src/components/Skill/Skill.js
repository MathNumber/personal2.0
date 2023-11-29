import React from "react";
import "./Skill.css";
function Skill() {
  return (
    <div id="skill">
      <div data-aos="fade-up" className="section">
        <h4 className="section-title">SKILLS</h4>
        <h2 className="section-subtitle">SKILLS</h2>
      </div>
      <div className="skill__list">
        <div data-aos="fade-up" className="skill__item">
          <div className="skill__highlight">
            <div className="skill__icon">
              <img src="assets/image/icon2.png" alt="" />
            </div>
            <h2>UI/UX Design</h2>
          </div>
          <div className="skill__text">
            <p>
              UI/UX Design is a multidisciplinary skill set that combines User
              Interface (UI) Design and User Experience (UX) Design
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="skill__item">
          <div className="skill__highlight">
            <div className="skill__icon">
              <img src="assets/image/icon4.png" alt="" />
            </div>
            <h2>App Design</h2>
          </div>
          <div className="skill__text">
            <p>
              App Design is a skill that involves creating user interfaces (UI)
              and user experiences (UX) for mobile applications
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="skill__item">
          <div className="skill__highlight">
            <div className="skill__icon">
              <img src="assets/image/icon6.png" alt="" />
            </div>
            <h2>Responsive Design</h2>
          </div>
          <div className="skill__text">
            <p>
              Responsive Design is a web development skill that focuses on
              creating websites and applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
