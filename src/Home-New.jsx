/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import "./Home-New.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/video-builder.mp4";
import ViewerIcon from "./assets/viewer-icon.svg";
import ViewerProduct from "./assets/video-viewer.mp4";
import Earlybirds from "./assets/early-birds.svg";
import videoImage from "./assets/video-min.png";

export const Home = () => {
  function scrollTest() {
    if (window.scrollY > (document.getElementById("animPara").offsetTop - document.getElementById("animPara").offsetHeight * 2)) {
      window.lessLetter = 1;
      document.getElementById("animPara").classList.add("top");
      document.getElementById("animPara").innerText = document.getElementById("animParaRef").innerText.slice(0, Math.floor(window.lessLetter));
      // console.warn(Math.floor(window.lessLetter))
    } else {
      document.getElementById("animPara").classList.remove("top");
    }
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
      <div className="toggle-section">
        <div className="cursor-anim"></div>
        <div className="toggle-anim"></div>
      </div>
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
        <img src={videoImage} alt="" />
      </section>

      <section className="flex-center">
        <p id="animPara" className="size-64 spirit left-align max-600">
          A new way to generate
          and discover documentation
          in Figma
          <br /><br />
          Meet Tidy Guide the intuitive documentation builder you've been looking for.
          <br /><br />
          Within minutes you will have comprehensive and up-to-date documentation of your design system.
        </p>
        <p id="animParaRef" className="size-64 spirit left-align max-600">
          A new way to generate
          and discover documentation
          in Figma
          <br /><br />
          Meet Tidy Guide the intuitive documentation builder you've been looking for.
          <br /><br />
          Within minutes you will have comprehensive and up-to-date documentation of your design system.
        </p>
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
        <img src={BuilderIcon} className="product-icon" />
        <h1 className="size-54">Meet Tidy Builder:</h1>
        <h2>Don’t start from scratch, stand on the shoulders of giants 💪</h2>
        <video
          src={BuilderProduct}
          className="big-image"
          muted
          loop
          autoPlay
          playsInline
        />
        <br />
        <button className="product-button">Get started with Builder</button>
      </section>

      <section>
        <img src={ViewerIcon} className="product-icon" />
        <h1 className="size-54">Meet Tidy Viewer:</h1>
        <h2>
          Integrated documentation when needed. <br />
          Wave goodbye to content switching 👋
        </h2>
        <video
          src={ViewerProduct}
          className="big-image"
          muted
          loop
          autoPlay
          playsInline
        />
        <br />
        <button className="product-button">Get started with Viewer</button>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <h1 className="size-72">How does Tidy work?</h1>
          <h2>
            Join teams worldwide who rely on Tidy to streamline their design
            system <br />
            documentation process and foster better collaboration!
          </h2>
          <iframe
            className="emptyVideo"
            src="https://www.youtube.com/embed/kCGNIeoPgY8?si=7V8XUZEfHvAi4FMD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div id="join"></div>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <footer>
            <img src={Earlybirds} />
            <div className="inner-footer">
              <h1 className="size-54">Join the early birds</h1>
              <p>
                Join Tidy’s early access list now to revolutionize your design
                process.
                <br />
                Go to Figma Community now and get started!
              </p>
            </div>
            <button onClick={() => { window.open("https://www.figma.com/@wearekido", "_blank") }}>Join Tidy Guide Beta</button>
            {/* <div className="product-input">
              <form id="email-form" onSubmit={handleSubmit} onChange={handleChange}>
                <input type="email" placeholder="Your email" id="user-email" />
                <button type="submit" id="form-button">Join Beta</button>
              </form>
            </div> */}
            <p id="thanks">
              Thanks for joining Tidy Guide Beta! 🚀 <br />
              We'll review your details and notify you once approved.
            </p>
          </footer>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored">
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
