import PropTypes from "prop-types";

import { HeaderDocSection } from "./HeaderDocSection";
import { VideoDocSection } from "./VideoDocSection";
import { ImageDocSection } from "./ImageDocSection";
import { ListDocSection } from "./ListDocSection";
import { LinkDocSection } from "./LinkDocSection";
import { TwoColumnsDocSection } from "./TwoColumnsDocSection";
import { TextDocSection } from "./TextDocSection";

const ElementSection = ({ element, index, navigationLinks }) => {
  const renderList = (arr) => {
    return (
      <ul className="list">
        {arr.map((line, i) => (
          <li key={i} className="list-item">
            {line}
          </li>
        ))}
      </ul>
    );
  };

  switch (element.datatype) {
    case "link":
      return (
        <LinkDocSection
          element={element}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "text":
      return (
        <TextDocSection
          element={element}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "two-columns":
      return (
        <TwoColumnsDocSection
          element={element}
          buildLists={renderList}
          index={index}
          headerData={navigationLinks}
        />
      );
    case "list":
      return (
        <ListDocSection
          element={element}
          buildLists={renderList}
          index={index}
        />
      );
    case "image":
      return <ImageDocSection element={element} index={index} />;
    case "video":
      return <VideoDocSection element={element} index={index} />;
    default:
      return null;
  }
};

export default ElementSection;

ElementSection.propTypes = {
  element: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  navigationLinks: PropTypes.array.isRequired,
};
