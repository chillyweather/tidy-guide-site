import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

export const VariantsDocSection = ({ element, index }) => {
  return (
    <div className={"section textSection variantsSection"}
      onMouseOver={(event) => { addToolTips(event) }}
    >
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

VariantsDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
