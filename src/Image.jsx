// import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";
import "./index.css";

export const Image = () => {
  return (
    <div className="comp-image">
      <button
        onClick={() => {
          window.close();
        }}
      >
        Back
      </button>
      <ReactSVG src={window.location.hash.slice(1, 99999999999)} />
    </div>
  );
};
//
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Image />);
