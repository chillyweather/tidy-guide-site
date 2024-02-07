import PropTypes from "prop-types";

export const TextDocSection = ({ element, index }) => {
  const textArray = element.text.split("\n");
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
      {/* {element.text.length && <p>{element.text}</p>} */}
      {textArray.length &&
        textArray.map(
          (paragraph, i) => !!paragraph.length && <p key={i}>{paragraph}</p>
        )}
    </div>
  );
};

TextDocSection.propTypes = {
  element: PropTypes.object,
  index: PropTypes.number,
};
