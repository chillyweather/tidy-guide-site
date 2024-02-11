import PropTypes from "prop-types";
// import { ReactSVG } from "react-svg";

export const SpacingDocSection = ({ element, index }) => (
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
    <div style={{ backgroundColor: "#fff", padding: "24px" }}>
      <p style={{ padding: 0, margin: 0 }}>Coming soon...</p>
    </div>
  </div>
);

SpacingDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
