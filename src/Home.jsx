import "./Home.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/video-builder.mp4";
import ViewerIcon from "./assets/viewer-icon.svg";
import ViewerProduct from "./assets/video-viewer.mp4";
import Earlybirds from "./assets/early-birds.svg";

export const Home = () => {
  return (
    <div className="home">

      <div className="top-gradient"></div>
      <section>
        <h1 className="anim-title" style={{ marginTop: 0 }}>I love spending all day<br />
          documenting my design decisions.<br />
          <div className="anim-seperator"><div class="anim-border"></div></div>
          <b className="anim-bold">Said no one. Ever.</b></h1>
        <h2>
          <b>A new way to generate and discover documentation in Figma </b><br />
          Meet Tidy — the intuitive documentation builder you’ve been looking for.
        </h2>
        <button>Get early access to Beta</button>
      </section>

      <section>
        <h1 className="size-72">Built for designers,<br />
          Loved by teams:</h1>
        <h2>Make it easy for designers to create and keep internal documentation up to date. <br />
          By creating centralized knowledge base across design teams.</h2>
      </section>

      <section>
        <img src={BuilderIcon} />
        <h1 className="size-54">Meet Tidy Builder:</h1>
        <h2>Don’t start from scratch, stand on the shoulders of giants 💪</h2>
        <video src={BuilderProduct} className="big-image" muted loop autoPlay />
        <br />
        <button className="product-button">Get started with Builder</button>
      </section>

      <section>
        <img src={ViewerIcon} />
        <h1 className="size-54">Meet Tidy Viewer:</h1>
        <h2>Integrated documentation when needed. <br />
          Wave goodbye to content switching  👋</h2>
          <video src={ViewerProduct} className="big-image" muted loop autoPlay />
        <br />
        <button className="product-button">Get started with Viewer</button>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <h1 className="size-72">How does Tidy work?</h1>
          <h2>Join teams worldwide who rely on Tidy to streamline their design system <br />
            documentation process and foster better collaboration!</h2>
          <video className="emptyVideo"></video>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <footer>
            <img src={Earlybirds} />
            <div className="inner-footer">
              <h1 className="size-54">Join the early birds</h1>
              <p>Join the Tidy beta waitlist now for early access! Be one of the first to try out our latest features We'll be gradually inviting new teams to the beta over the coming weeks.</p>
            </div>
            <button>Join Tidy Guide beta</button>
          </footer>
        </div>
      </section>

      <section className="colored">
        <div className="inner-colored">
          <div className="flex-wrapper">
            <p>© <a href="https://wearekido.com" target="_blank">2024 Kido. All Rights Reserved</a></p>
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
