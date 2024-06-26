import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { selectedImageLinkAtom, isImageOpenAtom } from "./atoms";
import { useQuery } from "@tanstack/react-query";
import fetchDoc from "./fetchDoc";
import PropTypes from "prop-types";
import { Guides } from "./Guides";
import { Image } from "./Image";
import { IconLink, IconClock } from "@tabler/icons-react";
import ElementSection from "./docContent/ElementSection";
import "./DetailsPage.css";

export const DetailsPage = () => {
  const [navigationLinks, setNavigationLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState("");
  const [status, setStatus] = useState(false);
  const [sectionData, setSectionData] = useState([]);
  const [updateDate, setUpdateDate] = useState("");
  const [componentPic, setComponentPic] = useState("");
  const [selectedImageLink] = useAtom(selectedImageLinkAtom);
  const [isImageOpen, setIsImageOpen] = useAtom(isImageOpenAtom);

  const { id } = useParams();
  // if (id === "overview") return;

  const { data } = useQuery({
    queryKey: ["doc", id],
    queryFn: fetchDoc,
  });

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setSectionData(data.docs);
      setStatus(data.inProgress);
      setComponentPic(data.componentPic);
      setUpdateDate(formatDate(data.updatedAt));
    }
  }, [data]);

  useEffect(() => {
    if (selectedImageLink) {
      console.log("selectedImageLink", selectedImageLink);
    }
  }, [isImageOpen, selectedImageLink]);

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
    <div className="wrapper-flex">
      <div className={"leftbar"}>
        <Guides setIsImageOpen={setIsImageOpen} />
      </div>
        <div className="doc-wrapper">
          <div className={"nav-wrapper"}>
            <div className={"nav-container"}>
              <h1 className={"subtitle"}>{title}</h1>
              <nav className={"navigation"}>
                <a className="link hidden"></a>
                {buildNavigationLinks(navigationLinks)}
              </nav>
            </div>
          </div>
          <div className={"section headerSection"}>
            <div className="title-wrapper">
              <strong>
                <h1 id={"sectionHeader"}>
                  {title}
                  <button
                    className={"copyLink " + copied}
                    onClick={() => {
                      navigator.clipboard.writeText(location.href);
                      setCopied("copied");
                      setTimeout(function () {
                        setCopied("");
                      }, 2000);
                    }}
                  >
                    <IconLink />
                  </button>
                </h1>
              </strong>
              {status && <div className={"wip"}>WIP</div>}
              {updateDate && (
                <div className="update-wrapper">
                  <IconClock size={18} color="#6C768E" />
                  <p className="last-update">Last update: {updateDate}</p>
                </div>
              )}
              {/* {componentPic && (
            <ReactSVG
              src={componentPic}
              className="svg-wrapper"
            />
            )} */}
              <span className="element-span">
                <img src={componentPic} className="element-image" />
              </span>
            </div>
          </div>
          {sectionData.map((element, index) => {
            if (element.publish && !element.hidden) {
              // return ElementSection({
              //   key: index,
              //   element,
              //   index,
              //   navigationLinks,
              // });
              return (
                <ElementSection
                  key={index}
                  element={element}
                  index={index}
                  navigationLinks={navigationLinks}
                  setIsImageOpen={setIsImageOpen}
                />
              );
            }
          })}
        </div>
      {isImageOpen && (
        <Image link={selectedImageLink} setIsImageOpen={setIsImageOpen} />
      )}
    </div>
  );
};

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date(dateString);

  return date.toLocaleString("en-US", options).replace(",", "");
}

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
