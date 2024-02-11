import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

export const AnatomyDocSection = ({ element, index }) => {
  console.log("element", element);
  return (
    <div className={"section textSection"}>
      <div className={"anchorLink"} id={element.title + index}></div>
      {element.title && (
        <div className={"title-row"}>
          <h3 className={"title"}>{element.title}</h3>
          <a href={"#top"} className={"back-link"}>
            ⬆︎
          </a>
        </div>
      )}
      {/* <div className={"image-wrapper"}>
        <img className={"image"} src={element.content.remoteImageLink} />
      </div> */}
      {element.content.remoteImageLink && (
        <ReactSVG
          src={element.content.remoteImageLink}
          style={{ width: "100%" }}
          className="svg-wrapper"
        />
      )}

      {/* <div style={{ backgroundColor: "#fff", padding: "24px" }}>
        <p style={{ padding: 0, margin: 0 }}>Coming soon...</p>
      </div> */}
    </div>
  );
};

AnatomyDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
