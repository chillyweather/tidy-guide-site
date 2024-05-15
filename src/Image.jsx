// import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";
import "./index.css";
import PropTypes from "prop-types";

export const Image = ({ link, setIsImageOpen }) => {
  return (
    <div className="comp-image">
      <button
        onClick={() => {
          console.log("close");
          setIsImageOpen(false);
        }}
      >
        Back
      </button>
      <ReactSVG src={link} />
    </div>
  );
};

Image.propTypes = {
  link: PropTypes.string,
  setIsImageOpen: PropTypes.func,
};

//
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Image />);
