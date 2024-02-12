import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

export const SpacingDocSection = ({ element, index }) => {
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
      {element.content.remoteImageLink && (
        <ReactSVG
          src={element.content.remoteImageLink}
          style={{ width: "100%" }}
          className="svg-wrapper"
        />
      )}
    </div>
  );
};

SpacingDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
