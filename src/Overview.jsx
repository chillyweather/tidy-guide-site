/* eslint-disable react-hooks/exhaustive-deps */
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { currentDocumentationsAtom, isBrowseGuidesOpenAtom } from "./atoms";
// import fetchDocs from "./fetchDocs";
// import fetchCollections from "./fetchCollections";
import PropTypes from "prop-types";
import { Guides } from "./Guides";
import { IconLink } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import noImage from "./assets/no-image.png";

import "./Overview.css";

export const Overview = () => {
  const [, setIsBrowseGuidesOpen] = useAtom(isBrowseGuidesOpenAtom);
  const [currentDocumentations] = useAtom(currentDocumentationsAtom);
  const navigate = useNavigate();
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setIsBrowseGuidesOpen(true);
  }, []);

  return (
    <div className="wrapper-flex">
      <div className={"leftbar"}>
        <Guides />
      </div>
      <div className="doc-wrapper">
        <div className={"nav-wrapper"}>
          <div className={"nav-container"}>
            <h1 className={"subtitle"}></h1>
            <nav className={"navigation"}></nav>
          </div>
        </div>
        <div className={"section headerSection"}>
          <div className="title-wrapper">
            <strong>
              <h1 id={"sectionHeader"}>
                Overview
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
          </div>
        </div>
        <section>
          <div className="overview-content">
            {currentDocumentations &&
              !!currentDocumentations.length &&
              currentDocumentations.map((doc, index) => {
                if (doc.draft) return null;
                return (
                  <div
                    key={index}
                    className="element-wrapper"
                    // eslint-disable-next-line react/no-unknown-property
                    tooltip={doc.title}
                  >
                    <button
                      className="element"
                      onClick={() => navigate(`/guide/${doc._id}`)}
                    >
                      {doc.componentPic &&
                      doc.componentPic.split(".").pop() === "png" ? (
                        <img src={doc.componentPic} className="element-image" />
                      ) : (
                        <div className="flex-image no-image">
                          <img src={noImage} alt="No image found" className="element-image"/>
                          {/* <p>No image found</p> */}
                        </div>
                      )}
                      {doc.inProgress && <div className={"wip"}>WIP</div>}
                    </button>
                    <p className="element-text">{doc.title}</p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

Overview.propTypes = {
  documentation: PropTypes.array,
  navigationLinks: PropTypes.array,
  token: PropTypes.string,
};
