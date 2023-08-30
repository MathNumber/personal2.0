import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact">
      <div data-aos="fade-up" className="section">
        <h4 className="section-title">Contact</h4>
        <h2 className="section-subtitle">Contact</h2>
      </div>
      <div class="contact__box">
        <div data-aos="fade-up" class="contact__box-left">
          <div class="contact__move">
            <h3 class="contact__title">Just say Hello</h3>
            <form
              action="#"
              method="POST"
              class="contact-form"
              id="contact-form"
            >
              <div class="contact__form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div class="contact__form">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div class="contact__form">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required=""
                />
              </div>
              <div class="contact__form">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="msg"
                  placeholder="Your Message"
                  required=""
                ></textarea>
              </div>
              <button
                class="contact__submit"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div data-aos="fade-up" class="contact__box-right">
          <h3 class="contact__title">Contact Info</h3>
          <div class="contact__text">
            <p>
              I'm thrilled that you've taken the time to visit my website.
              Whether you have a question, a project in mind, or just want to
              connect, I'd love to hear from you. Your feedback and inquiries
              are important to me, and I'm here to assist you in any way I can.
            </p>
          </div>
          <div class="contact__info">
            <div class="contact__single">
              <div class="contact__icon">
                <svg
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fa-regular"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49c-16.841 13.247-50.201 45.072-73.413 44.701c-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646c21.857 17.205 60.134 55.186 103.062 54.955c42.717.231 80.509-37.199 103.053-54.947c49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                  ></path>
                </svg>
              </div>
              <div class="contact__details">
                <h4>Email</h4>
                <a href="ducpd82@gmail.com">ducpd82@gmail.com</a>
              </div>
            </div>
            <div class="contact__single">
              <div class="contact__icon">
                <svg
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fa-solid"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
              </div>
              <div class="contact__details">
                <h4>Phone</h4>
                <a href="ducpd82@gmail.com">+84 334-354-648</a>
              </div>
            </div>
            <div class="contact__single">
              <div class="contact__icon">
                <svg
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                  ></path>
                </svg>
              </div>
              <div class="contact__details">
                <h4>Address</h4>
                <a href="ducpd82@gmail.com">Thua Thien Hue</a>
              </div>
            </div>
            <div class="contact__social">
              <div class="social__text">
                <p>Visit my social profile and get connected</p>
              </div>
              <div class="social__link">
                <a href="ducpd82@gmail.com" class="social__btn">
                  <span class="social__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </span>
                  <span class="social__name">Facebook</span>
                </a>
                <a href="ducpd82@gmail.com" class="social__btn">
                  <span class="social__icon">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--fa6-brands"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </span>
                  <span class="social__name">Twitter</span>
                </a>
                <a href="ducpd82@gmail.com" class="social__btn">
                  <span class="social__icon">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--fa6-brands"
                      width="0.88em"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"
                      ></path>
                    </svg>
                  </span>
                  <span class="social__name">Linkedln</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
