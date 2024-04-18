/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import "./Home-New.css";
import Earlybirds from "./assets/magic-hat.svg";
import heroEdit from "./assets/hero-edit-min.png";
import heroView from "./assets/hero-view-min.png";
import ExplainerVideo from "./assets/Explainer.mp4";
import CursorPlay from "./assets/cursor-play.svg";
function start(e) {
  document.getElementById("cursor-img").style.display = "block";
}
function drag(e) {
  document.getElementById("cursor-img").style.left = e.clientX + document.getElementById("video-section").offsetLeft + "px";
  document.getElementById("cursor-img").style.top = e.clientY + document.getElementById("video-section").offsetTop + window.scrollY + "px";
}
function stop(e) {
  document.getElementById("cursor-img").style.display = "none";
}
function play(e) {
  if (e.target.getElementsByTagName("video")[0].classList.contains('playing')) {
    e.target.getElementsByTagName("video")[0].pause();
    e.target.getElementsByTagName("video")[0].classList.remove('playing');
  } else {
    e.target.getElementsByTagName("video")[0].play();
    e.target.getElementsByTagName("video")[0].classList.add('playing');
  }
}

export const Home = () => {

  return (
    <div className="home">
      <section>
        <div className="anim-color-token">color.text.primary</div>
        <h1 className="anim-title" style={{ marginTop: 0 }}>
          The simplest way
          <br />
          <b>to create</b>
          <br />
          <span>documentation</span>
          <div className="anim-seperator">
            <div className="anim-spacing-token">spacing.xlarge</div>
          </div>
        </h1>
      </section>

      <section className="no-top-padding">
        <p className="hero-para">
          <b>A new way to generate and discover documentation in Figma</b>
          <br />
          Meet Tidy — the intuitive documentation builder you’ve been looking
          for.
        </p>
        <div className="videoSection" id="video-section" onMouseOver={(event) => { start(event) }} onMouseMove={(event) => { drag(event) }} onMouseOut={(event) => { stop(event) }} onClick={(event) => { play(event) }}>
          <img src={CursorPlay} className="cursor" id="cursor-img" />
          <video src={ExplainerVideo} playsInline></video>
        </div>
        <br /><br />
        <button
          onClick={() => {
            window.open(
              "https://www.figma.com/community/plugin/1346498731777233765/tidy-guide-beta"
            );
          }}
        >
          Get early access to beta
        </button>
      </section>

      <section>
        <h1 className="size-72">
          Built for designers,
          <br />
          Loved by teams:
        </h1>
        <h2>
          Make it easy for designers to create and keep internal documentation
          up to date. <br />
          By creating centralized knowledge base across design teams.
        </h2>
      </section>

      <section>
        <div className="toggle-flex">
          <div className="toggle-section">
            <input type="checkbox" id="toggle-label"></input>
            <label htmlFor="toggle-label">
              {/* <label for="toggle-label"> */}
              <div className="toggle">
                <span>View</span>
                <span>Edit</span>
              </div>
            </label>
            <p className="edit">
              Don’t start from scratch, stand on the shoulders of giants 💪
            </p>
            <p className="view">
              Integrated documentation when needed.
              <br />
              Wave goodbye to content switching 👋
            </p>
            <img src={heroEdit} className="edit" />
            <img src={heroView} className="view" />
          </div>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <footer>
            <img src={Earlybirds} />
            <div className="inner-footer">
              <h1 className="size-54">
                Your knowledge base across design teams
              </h1>
            </div>
            <button
              onClick={() => {
                window.open(
                  "https://www.figma.com/community/plugin/1346498731777233765/tidy-guide-beta",
                  "_blank"
                );
              }}
            >
              Join Tidy Guide Beta
            </button>

            <p id="thanks">
              Thanks for joining Tidy Guide Beta! 🚀 <br />
              We'll review your details and notify you once approved.
            </p>
          </footer>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored max-80">
          <div className="flex-wrapper">
            <p>
              ©{" "}
              <a href="https://wearekido.com" target="_blank" rel="noreferrer">
                2024 Kido. All Rights Reserved
              </a>
            </p>
            <div className="links-wrapper">
              <a tip="Coming soon">Terms and Conditions</a>
              <a tip="Coming soon">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
