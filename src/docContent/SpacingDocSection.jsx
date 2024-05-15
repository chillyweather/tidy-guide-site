import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import noImage from "../assets/no-empty-state.png";
import { useAtom } from "jotai";
import { selectedImageLinkAtom } from "../atoms";

export const SpacingDocSection = ({ element, index, setIsImageOpen }) => {
  const [, setSelectedImageLink] = useAtom(selectedImageLinkAtom);
  return (
    <div
      className={"section textSection spacingsSection"}
      onMouseOver={(event) => {
        addToolTips(event);
      }}
      onClick={() => {
        if (element.content.remoteImageLink) {
          setSelectedImageLink(element.content.remoteImageLink);
          setIsImageOpen(true);
        }
      }}
      // onClick={() => {
      //   window.open(
      //     window.location.origin +
      //       "/src/image.html#" +
      //       element.content.remoteImageLink,
      //     "_blank"
      //   );
      // }}
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
      {element.content.remoteImageLink ? (
        <ReactSVG
          src={element.content.remoteImageLink}
          style={{ width: "100%" }}
          className="svg-wrapper"
        />
      ) : (
        <div className="flex-no-image">
          <img src={noImage} />
          <h4>Invalid Image</h4>
          <p>The link image you are trying to access does not exist.</p>
        </div>
      )}
    </div>
  );
};

function addToolTips(event) {
  var x = event.target.getElementsByTagName("tspan");
  var i;
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.includes("title")) {
      var newElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "title"
      );
      newElement.innerHTML = x[i].innerHTML;
      x[i].appendChild(newElement);
    }
  }
}

SpacingDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
  setIsImageOpen: PropTypes.func,
};
