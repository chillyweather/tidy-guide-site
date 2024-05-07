import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

export const AnatomyDocSection = ({ element, index }) => {
  return (
    <div className={"section textSection anatomySection"}>
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
          onMouseOver={(event) => { addToolTips(event) }}
        />
      )}
    </div>
  );
};

function addToolTips(event) {
  var x = event.target.getElementsByTagName("tspan");
  var i;
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.includes("title")) {
      var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'title');
      newElement.innerHTML = x[i].innerHTML;
      x[i].appendChild(newElement);
    }
  }
}

AnatomyDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
