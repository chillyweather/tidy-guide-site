import "./Home.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/builder-product.png";
import ViewerIcon from "./assets/viewer-icon.svg";
import ViewerProduct from "./assets/viewer-product.png";
import Earlybirds from "./assets/early-birds.svg";

export const Home = () => {
  return (
    <div className="home">

      {/* <h2>Home</h2> */}
      <div className="top-gradient"></div>
      <section>
        <h1 style={{ marginTop: 0 }}>I love spending all day<br />
          documenting my design decisions.<br />
          <b>Said no one. Ever.</b></h1>
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
        <img src={BuilderProduct} className="big-image" />
        <br />
        <button className="product-button">Get started with Builder</button>
      </section>

      <section>
        <img src={ViewerIcon} />
        <h1 className="size-54">Meet Tidy Viewer:</h1>
        <h2>Integrated documentation when needed. <br />
          Wave goodbye to content switching  👋</h2>
        <img src={ViewerProduct} className="big-image" />
        <br />
        <button className="product-button">Get started with Viewer</button>
      </section>

      <section className="colored">
        <h1 className="size-72">How does Tidy work?</h1>
        <h2>Join teams worldwide who rely on Tidy to streamline their design system <br />
          documentation process and foster better collaboration!</h2>
        <video></video>
      </section>

      <section className="colored">
        <footer>
          <img src={Earlybirds} />
          <div className="inner-footer">
            <h1 className="size-54">Join the early birds</h1>
            <p>Join the Tidy beta waitlist now for early access! Be one of the first to try out our latest features We'll be gradually inviting new teams to the beta over the coming weeks.</p>
          </div>
          <button>Join Tidy Guide beta</button>
        </footer>
      </section>

      <section className="colored">
        <div className="flex-wrapper">
          <p>© 2024 Kido. All Rights Reserved</p>
          <div className="links-wrapper">
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
};
