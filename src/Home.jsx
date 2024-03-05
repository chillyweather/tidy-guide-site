import "./Home.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/video-builder.mp4";
import ViewerIcon from "./assets/viewer-icon.svg";
import ViewerProduct from "./assets/video-viewer.mp4";
import Earlybirds from "./assets/early-birds.svg";

export const Home = () => {
  function scrollTest(){
    if(window.scrollY > 0){
      document.getElementById("top-header").classList.add("top");
    }else{
      document.getElementById("top-header").classList.remove("top");
    }
  }

  return (
    <div className="home">
      {addEventListener("scroll", (event) => {scrollTest()})}
      <div className="top-gradient"></div>
      <section>
        <div className="anim-color-token">color.text.primary</div>
        <h1 className="anim-title" style={{ marginTop: 0 }}>I love spending all day<br />
          documenting my design decisions.<br />
          <div className="anim-seperator">
            <div className="anim-spacing-token">spacing.xlarge</div>
            <div class="anim-border"></div>
          </div>
          <b className="anim-bold"></b></h1>
        <h2>
          <b>A new way to generate and discover documentation in Figma </b><br />
          Meet Tidy — the intuitive documentation builder you’ve been looking for.
        </h2>
        <button className="first-button">Join Tidy Guide beta</button>
      </section>

      <section>
        <h1 className="size-72">Built for designers,<br />
          Loved by teams:</h1>
        <h2>Make it easy for designers to create and keep internal documentation up to date. <br />
          By creating centralized knowledge base across design teams.</h2>
      </section>

      <section>
        <img src={BuilderIcon} className="product-icon" />
        <h1 className="size-54">Meet Tidy Builder:</h1>
        <h2>Don’t start from scratch, stand on the shoulders of giants 💪</h2>
        <video src={BuilderProduct} className="big-image" muted loop autoPlay />
        <br />
        <button className="product-button">Get started with Builder</button>
      </section>

      <section>
        <img src={ViewerIcon} className="product-icon" />
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
              <p>Join Tidy’s early access list now to revolutionize your design process.<br />
                Go to Figma Community now and get started!</p>
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
