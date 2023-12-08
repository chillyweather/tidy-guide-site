import PropTypes from "prop-types";
export const HeaderDocSection = ({ element, navigationLinks }) => {
  const status = element.inProgress;
  return (
    <div className={"section headerSection"}>
      <div className="title-wrapper">
        <strong>
          <h1 id={"sectionHeader"}>{element.title}</h1>
        </strong>
        {status && <div className={"wip"}>WIP</div>}
      </div>
      <div className={"nav-wrapper"}>
        <div className={"nav-container"}>
          <p>On this page</p>
          <h1 className={"subtitle"}>{element.title}</h1>
          <nav className={"navigation"}>
            {buildNavigationLinks(navigationLinks)}
          </nav>
        </div>
      </div>
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

HeaderDocSection.propTypes = {
  element: PropTypes.object,
  navigationLinks: PropTypes.array,
};
