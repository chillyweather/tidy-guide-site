import PropTypes from "prop-types";
import imgloader from "../assets/img-loader.gif";
import brokenImg from "../assets/broken-image.svg";

function hideImg(event) {
  event.target.classList.add("broken");
}

export const ImageDocSection = ({
  element,
  setCurrentImage,
  setIsImageOpen,
  index,
}) => (
  <div className={"section imageSection"}>
    <div className={"anchorLink"} id={element.title + index}></div>
    {element.title && (
      <div className={"title-row"}>
        <h3 className={"title"}>{element.title}</h3>
        <a href={"#top"} className={"back-link"}>
          ⬆︎
        </a>
      </div>
    )}
    {element.content.remoteImageLink.length && (
      <button
        onClick={() => {
          setCurrentImage(element.content.remoteImageLink);
          setIsImageOpen(true);
        }}
        style={{
          cursor: "pointer",
          width: "100%",
          backgroundColor: "transparent",
          padding: 0,
        }}
      >
        <div className={"image-wrapper"}>
          <img
            className={"image"}
            src={element.content.remoteImageLink}
            onError={(e) => {
              hideImg(e);
            }}
          />
          <div className={"invalid-image"}>
            <img src={brokenImg} />
            <h2>Invalid Image</h2>
            <p>The link image you are trying to access does not exist.</p>
          </div>
          <img src={imgloader} className={"img-loader"} />
        </div>
      </button>
    )}
  </div>
);

ImageDocSection.propTypes = {
  element: PropTypes.object,
  setCurrentImage: PropTypes.func,
  setIsImageOpen: PropTypes.func,
  index: PropTypes.number,
};
