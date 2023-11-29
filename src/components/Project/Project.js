import React from "react";
import "./Project.css";
function Project() {
  return (
    <div id="project">
      <div data-aos="fade-up" className="section">
        <h4 className="section-title">Projects</h4>
        <h2 className="section-subtitle">Projects</h2>
      </div>
      <div className="project__list">
        <div data-aos="fade-up" className="project__item">
          <div className="project__img">
            <img src="assets/image/2023-01-06_184659.png" alt="" />
          </div>
          <div className="project__item-hidden">
            <div className="project__icon">
              <a href="https://notes-ebon-iota.vercel.app/">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
            <h5>Note App</h5>
            <p>Education/Personal</p>
          </div>
        </div>

        <div data-aos="fade-up" className="project__item">
          <div className="project__img">
            <img src="assets/image/2023-01-06_184805.png" alt="" />
          </div>
          <div className="project__item-hidden">
            <div className="project__icon">
              <a href="https://convert-xi.vercel.app/">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
            <h5>Calculator App</h5>
            <p>Education/Personal</p>
          </div>
        </div>
        <div data-aos="fade-up" className="project__item">
          <div className="project__img">
            <img src="assets/image/2023-01-06_184841.png" alt="" />
          </div>
          <div className="project__item-hidden">
            <div className="project__icon">
              <a href="https://macintosh-mocha.vercel.app/">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
            <h5>Macintosh App</h5>
            <p>Education/Personal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
