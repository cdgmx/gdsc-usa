import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="Footer">
      <div class="fifth p-sm-5">
        <div class="head text-center">
          <h1 class="mb-5 mt-xl-4">PARTNERS</h1>
        </div>
        <div class="container d-flex justify-content-center ">
          <div class="card border-0 m-xl-2">
            <img class="m-1 " alt="Sample" />
          </div>
          <div class="card border-0 m-xl-2">
            <img class="m-1 "  alt="Sample" />
          </div>
          <div class="card border-0 m-xl-2">
            <img class="m-1 "  alt="Sample" />
          </div>
          <div class="card border-0 m-xl-2">
            <img class="m-1 "  alt="Sample" />
          </div>
          <div class="card border-0 m-xl-2">
            <img class="m-1 "  alt="Sample" />
          </div>
          <div class="card border-0 m-xl-2">
            <img class="m-1 "  alt="Sample" />
          </div>
        </div>
      </div>
      <div class="contact d-flex justify-content-center">
        <div class="container m-3 ">
          <h1 class="pt-sm-5">Contact Us</h1>
          <div class="card  mt-3">
            <form>
              <div class="mb-1 ">
                <label class="form-label">
                  <input
                    class="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                </label>
              </div>
              <div className="mb-1">
                <label class="form-label">
                  <input
                    class="form-control"
                    placeholder="Email"
                    type="text"
                    name="name"
                  />
                </label>
              </div>
              <div class="mb-1">
                <label class=" message form-label">
                  <textarea
                    placeholder="Message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </label>
              </div>
              <a class="btn btn-light " href="#" role="button">
                Submit
              </a>
            </form>
          </div>
        </div>
        <div class="container align-self-center  m-3 mt-sm-5 ">
          <div class="mt-md-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-location me-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span>General Luna St, Iloilo City Proper, Iloilo City</span>
          </div>
          <div class="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-check me-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 6l2 2l4 -4"></path>
            </svg>
            <span>09** *** ****</span>
          </div>
          <div class="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail me-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <span>gdscusa@gmail.com</span>
          </div>
          <div class="mt-md-5 mt-2">
            <span>
              Social Media Accounts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook ms-sm-2"
                width="22"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="blue"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram ms-sm-2"
                width="22"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="purple"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin ms-sm-2"
                width="22"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="lightblue"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <line x1="8" y1="11" x2="8" y2="16"></line>
                <line x1="8" y1="8" x2="8" y2="8.01"></line>
                <line x1="12" y1="16" x2="12" y2="11"></line>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="container image-location m-3 d-flex justify-content-center">
          <img class="mt-md-5" alt="Location" />
        </div>
      </div>

      <div class="nav-options p-sm-3 ">
        <div class="container d-flex justify-content-center border-top border-white ">
          <div class="card ms-xl-auto text-center border-0">
            <Link href="/a" >
              <h4>About us</h4>
            </Link>
            <p>Vision</p>
            <p>Mission</p>
          </div>
          <div class="card ms-xl-auto text-center border-0">
            <Link href="/b"  >
              <h4>Event</h4>
            </Link>
            <p>Upcoming events</p>
            <p>Study Jams</p>
            <p>Workshops</p>
            <p>Tech talks</p>
          </div>
          <div class="card ms-xl-auto text-center border-0">
            <Link href="/c"  >
              <h4>Team</h4>
            </Link>
            <p>Executive Board</p>
            <p>Departments</p>
          </div>
          <div class="card ms-xl-auto text-center border-0">
            <Link href="/d"  >
              <h4>Project</h4>
            </Link>
            <p>Projects</p>
          </div>
          <div class="card ms-xl-auto text-center border-0">
            <Link href="/e" >
              <h4>Register</h4>
            </Link>
            <p>Registraion</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <nav class="navbar">
          <div class="container-fluid border-top mb-2">
            <Link href="/f">
                <div  class=" footer-logo  nav-link">
              <img  alt="Logo" />
              <span class="footer-gd ">Google Developer Student Clubs</span>
              <br />
              <span class="footer-school ">University of San Agustin</span>
              </div>
            </Link>

            <div class="text-muted ">
              © 2021 Google Developers Student Club University of San Agustin{" "}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
