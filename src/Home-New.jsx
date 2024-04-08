/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import "./Home-New.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/video-builder.mp4";
import ViewerIcon from "./assets/viewer-icon.svg";
import ViewerProduct from "./assets/video-viewer.mp4";
import Earlybirds from "./assets/magic-hat.svg";
import videoImage from "./assets/video-min.png";

export const Home = () => {
  function calculateElementVisibility(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const percentageVisible = (visibleHeight / rect.height) * 100;
    return Math.max(0, Math.min(100, percentageVisible));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.elements["user-email"].value;
    const url =
      "https://script.google.com/macros/s/AKfycbz6pKd-_6gTUSWDwOhOiea8bFr-5WI3A4NMLgH2gKzh4JJPKjiN0kCHNC-rDT3iqIEE/exec";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "email=" + encodeURIComponent(userEmail),
    });

    e.target.elements["user-email"].value = "";
    document.getElementById("thanks").classList.add("anim");
    document.getElementById("form-button").classList.add("disabled");
  };

  const handleChange = (e) => {
    document.getElementById("thanks").classList.remove("anim");
    document.getElementById("form-button").classList.remove("disabled");
  };

  return (
    <div className="home">
      {addEventListener("scroll", (event) => {
        scrollTest();
      })}
      {/* <div style={{marginTop: "80px", marginBottom: "80px"}}>
        <div className="toggle-section">
          <div className="cursor-anim"></div>
          <div className="toggle-anim"></div>
        </div>
      </div> */}
      <section>
        <div className="anim-color-token">color.text.primary</div>
        <h1 className="anim-title" style={{ marginTop: 0 }}>
          The simplest way
          <br />
          to create
          <br />
          documentation
          <div className="anim-seperator">
            <div className="anim-spacing-token">spacing.xlarge</div>
          </div>
        </h1>
      </section>

      <section>

        <p className="hero-para">
          <b>A new way to generate and discover documentation in Figma</b>
          <br />
          Meet Tidy — the intuitive documentation builder you’ve been looking for.
        </p>
        <button onClick={() => { window.open('https://www.figma.com/community/plugin/1346498731777233765/tidy-guide-beta') }}>Get early access to beta</button>
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
      <div>
        <div className="toggle-section">
          <input type="checkbox" id="toggle-label"></input>
          <label for="toggle-label">
            <div className="toggle">
              <span>View</span>
              <span>Edit</span>
            </div>
          </label>
        </div>
      </div>
      <section>

      </section>

      <section className="colored">
        <div className="inner-colored">
          <footer>
            <img src={Earlybirds} />
            <div className="inner-footer">
              <h1 className="size-54">Your knowledge base across design teams</h1>

            </div>
            <button onClick={() => { window.open("https://www.figma.com/community/plugin/1346498731777233765/tidy-guide-beta", "_blank") }}>Join Tidy Guide Beta</button>

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
