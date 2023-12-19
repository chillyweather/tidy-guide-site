import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ElementSection from "./docContent/ElementSection";
export const DetailsPage = ({ documentation, navigationLinks }) => {
  const { id } = useParams();
  const section = documentation.find((e) => e._id === id);
  const sectionData = section.docs;
  const status = section.inProgress;

  return (
    <div className="doc-wrapper">
      <div className={"section headerSection"}>
        <div className="title-wrapper">
          <strong>
            <h1 id={"sectionHeader"}>{section.title}</h1>
          </strong>
          {status && <div className={"wip"}>WIP</div>}
        </div>
        <div className={"nav-wrapper"}>
          <div className={"nav-container"}>
            <p>On this page</p>
            <h1 className={"subtitle"}>{section.title}</h1>
            <nav className={"navigation"}>
              {buildNavigationLinks(navigationLinks)}
            </nav>
          </div>
        </div>
      </div>
      {sectionData.map((element, index) => {
        return ElementSection({
          key: index,
          element,
          index,
          navigationLinks,
        });
      })}
    </div>
  );
};

function buildNavigationLinks(arr) {
  return arr.map((element, index) => {
    return (
      <a key={index} className={"link"} href={"#" + element[0] + element[1]}>
        {element[0]}
      </a>
    );
  });
}

DetailsPage.propTypes = {
  documentation: PropTypes.array,
  navigationLinks: PropTypes.array,
};
