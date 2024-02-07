import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDoc from "./fetchDoc";
import PropTypes from "prop-types";
import ElementSection from "./docContent/ElementSection";

export const DetailsPage = () => {
  const [navigationLinks, setNavigationLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [sectionData, setSectionData] = useState([]);

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["doc", id],
    queryFn: fetchDoc,
  });

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setSectionData(data.docs);
      setStatus(data.inProgress);
    }
  }, [data]);

  useEffect(() => {
    if (sectionData.length > 0) {
      if (id.length > 0) {
        const data = sectionData;
        const keys = Object.keys(data);
        const newLinks = keys.reduce((links, key, index) => {
          const element = data[key];
          if (
            element.datatype &&
            element.publish &&
            !element.hidden &&
            element.datatype !== "header"
          ) {
            links.push([element.title, index]);
          }
          return links;
        }, []);
        setNavigationLinks(newLinks);
      }
    }
  }, [sectionData, id]);

  return (
    <div className="doc-wrapper">
      <div className={"nav-wrapper"}>
          <div className={"nav-container"}>
            <h1 className={"subtitle"}>{title}</h1>
            <nav className={"navigation"}>
              {buildNavigationLinks(navigationLinks)}
            </nav>
          </div>
        </div>
      <div className={"section headerSection"}>
        <div className="title-wrapper">
          <strong>
            <h1 id={"sectionHeader"}>{title}</h1>
          </strong>
          {status && <div className={"wip"}>WIP</div>}
        </div>
      </div>
      {sectionData.map((element, index) => {
        if (element.publish && !element.hidden) {
          return ElementSection({
            key: index,
            element,
            index,
            navigationLinks,
          });
        }
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
  token: PropTypes.string,
};
