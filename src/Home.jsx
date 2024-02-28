import "./Home.css";
import BuilderIcon from "./assets/builder-icon.svg";
import BuilderProduct from "./assets/builder-product.png";

export const Home = () => {
  return (
    <div className="home">

      {/* <h2>Home</h2> */}
      <section>
        <h1 style={{ marginTop: 0 }}>I love spending all day<br />
          documenting my design decisions.<br />
          <b>Said no one. Ever.</b></h1>
        <h2>
          <b>A new way to generate and discover documentation in Figma</b><br />
          Meet Tidy — the intuitive documentation builder you’ve been looking for.
        </h2>
        <button>Get early access to Beta</button>
      </section>

      <section>
        <h1 className="size-72">Built for designers,<br />
          Loved by teams:</h1>
        <h2>Make it easy for designers to create and keep internal documentation up to date.<br />
          By creating centralized knowledge base across design teams.</h2>
      </section>

      <section>
        <img src={BuilderIcon} />
        <h1 className="size-54">Meet Tidy Builder:</h1>
        <h2>Don’t start from scratch, stand on the shoulders of giants 💪</h2>
        <img src={BuilderProduct} className="big-image" />
        <br />
        <br />
        <button>Get started with Builder</button>
      </section>

      <section>
        <img src={BuilderIcon} />
        <h1 className="size-54">Meet Tidy Viewer:</h1>
        <h2>Integrated documentation when needed.<br/>
          Wave goodbye to content switching  👋</h2>
        <img src={BuilderProduct} className="big-image" />
        <br />
        <br />
        <button>Get started with Viewer</button>
      </section>

    </div>
  );
};
