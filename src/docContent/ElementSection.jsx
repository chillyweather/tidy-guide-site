import PropTypes from "prop-types";

import { VideoDocSection } from "./VideoDocSection";
import { ImageDocSection } from "./ImageDocSection";
import { ListDocSection } from "./ListDocSection";
import { LinkDocSection } from "./LinkDocSection";
import { TwoColumnsDocSection } from "./TwoColumnsDocSection";
import { DosDontsDocSection } from "./DosDontsDocSection";
import { TextDocSection } from "./TextDocSection";
import { AnatomyDocSection } from "./AnatomyDocSection";
import { SpacingDocSection } from "./SpacingDocSection";
import { PropertyDocSection } from "./PropertyDocSection";
import { VariantsDocSection } from "./VariantsDocSection";

const ElementSection = ({
  element,
  index,
  navigationLinks,
  setIsImageOpen,
}) => {
  const renderList = (arr) => {
    return (
      <ul className="list">
        {arr.map(
          (line, i) =>
            !!line.length && (
              <li key={i} className="list-item">
                {line}
              </li>
            )
        )}
      </ul>
    );
  };

  switch (element.datatype) {
    case "link":
      return (
        <LinkDocSection
          key={index}
          element={element}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "text":
      return (
        <TextDocSection
          key={index}
          element={element}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "two-columns":
      return (
        <TwoColumnsDocSection
          key={index}
          element={element}
          buildLists={renderList}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "dos-donts":
      return (
        <DosDontsDocSection
          key={index}
          element={element}
          buildLists={renderList}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "list":
      return (
        <ListDocSection
          key={index}
          element={element}
          buildLists={renderList}
          index={index}
        />
      );
    case "image":
      return <ImageDocSection element={element} index={index} key={index} />;
    case "video":
      return <VideoDocSection element={element} index={index} key={index} />;
    case "anatomy":
      return (
        <AnatomyDocSection
          element={element}
          index={index}
          key={index}
          setIsImageOpen={setIsImageOpen}
        />
      );
    case "spacing":
      return (
        <SpacingDocSection
          element={element}
          index={index}
          key={index}
          setIsImageOpen={setIsImageOpen}
        />
      );
    case "property":
      return (
        <PropertyDocSection
          element={element}
          index={index}
          key={index}
          setIsImageOpen={setIsImageOpen}
        />
      );
    case "variants":
      return (
        <VariantsDocSection
          element={element}
          index={index}
          key={index}
          setIsImageOpen={setIsImageOpen}
        />
      );
    default:
      return null;
  }
};

export default ElementSection;

ElementSection.propTypes = {
  element: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  navigationLinks: PropTypes.array.isRequired,
  setIsImageOpen: PropTypes.func.isRequired,
};
