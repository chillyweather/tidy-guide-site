/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  currentDocumentationsAtom,
  isBrowseGuidesOpenAtom,
  isImageOpenAtom,
} from "./atoms";
// import fetchDocs from "./fetchDocs";
// import fetchCollections from "./fetchCollections";
import PropTypes from "prop-types";
import { Guides } from "./Guides";
import { IconLink, IconExclamationCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
// import noImage from "./assets/no-image.png";
import noImage from "./assets/no-empty-state.png";
import EmptyState from "./assets/empty-state.svg";

import "./Overview.css";

export const Overview = () => {
  const [, setIsBrowseGuidesOpen] = useAtom(isBrowseGuidesOpenAtom);
  const [currentDocumentations] = useAtom(currentDocumentationsAtom);
  const navigate = useNavigate();
  const [, setIsImageOpen] = useAtom(isImageOpenAtom);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setIsBrowseGuidesOpen(true);
  }, []);

  function toggleFunc(e) {
    const x = document.getElementsByClassName("element-wrapper");
    if (e.target.checked) {
      const arrayToSort = new Array();
      for (let i = 0; i < x.length; i++) {
        arrayToSort.push(x[i].getAttribute("last-updated"));
      }
      arrayToSort.sort();
      arrayToSort.reverse();

      for (let i = 0; i < x.length; i++) {
        x[i].style.order = arrayToSort.indexOf(
          x[i].getAttribute("last-updated")
        );
      }
    } else {
      for (let i = 0; i < x.length; i++) {
        x[i].style.order = 0;
      }
    }
  }

  return (
    <div className="wrapper-flex">
      <div className={"leftbar"}>
        <Guides setIsImageOpen={setIsImageOpen} />
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
          </div>
        </div>
        {currentDocumentations.length > 0 && (
          <div>
            <input
              type="checkbox"
              name=""
              id="order-check"
              onClick={(event) => {
                toggleFunc(event);
              }}
            />
            <label htmlFor="order-check">
              <div className="reorder-toggle">
                <button className="selected">Alphabetical</button>
                <button>Recent</button>
              </div>
            </label>
            <br />
          </div>
        )}
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
                    last-updated={
                      doc.updatedAt.slice(0, 4) +
                      doc.updatedAt.slice(6, 7) +
                      doc.updatedAt.slice(8, 10) +
                      doc.updatedAt.slice(11, 13) +
                      doc.updatedAt.slice(14, 16) +
                      doc.updatedAt.slice(17, 19)
                    }
                    // eslint-disable-next-line react/no-unknown-property
                    tooltip={doc.title}
                  >
                    <button
                      className="element"
                      onMouseOver={(event) => {
                        decideTooltip(event);
                      }}
                      onClick={() => navigate(`/guide/${doc._id}`)}
                    >
                      {doc.componentPic &&
                      doc.componentPic.split(".").pop() === "png" ? (
                        <img src={doc.componentPic} className="element-image" />
                      ) : (
                        <div className="flex-image no-image">
                          <div
                            tooltip="Image not found or type unknown"
                            className="no-image-alert-wrapper"
                          >
                            <IconExclamationCircle className="no-image-alert" />
                          </div>
                          <img
                            src={noImage}
                            alt="No image found"
                            className="element-image"
                          />
                        </div>
                      )}
                      {doc.inProgress && <div className={"wip"}>WIP</div>}
                    </button>
                    <p className="element-text">{doc.title}</p>
                    {/* <div>{doc.updatedAt}</div>
                    <div>{doc.updatedAt.slice(0, 4)}</div>
                    <div>{doc.updatedAt.slice(6, 7)}</div>
                    <div>{doc.updatedAt.slice(8, 10)}</div>
                    <div>{doc.updatedAt.slice(11, 13)}</div>
                    <div>{doc.updatedAt.slice(14, 16)}</div>
                    <div>{doc.updatedAt.slice(17, 19)}</div>
                    <div>
                      {(doc.updatedAt.slice(0, 4)) + (doc.updatedAt.slice(6, 7)) + (doc.updatedAt.slice(8, 10)) + (doc.updatedAt.slice(11, 13)) + (doc.updatedAt.slice(14, 16)) + (doc.updatedAt.slice(17, 19))}
                    </div> */}
                  </div>
                );
              })}
          </div>
          {currentDocumentations.length == 0 && (
            <div className="empty-index">
              <img src={EmptyState} className={"empty-index-image"} />
              <div className="empty-index-flex">
                <h2>Looks like you don&apos;t have any Documentation</h2>
                <p>Fortunately, it&apos;s easy to create documentation</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
function decideTooltip(event) {
  event.target.parentElement.setAttribute(
    "og-width",
    event.target.parentElement.getElementsByClassName("element-text")[0]
      .offsetWidth
  );
  event.target.parentElement.getElementsByClassName(
    "element-text"
  )[0].style.overflow = "visible";
  event.target.parentElement.getElementsByClassName(
    "element-text"
  )[0].style.width = "fit-content";
  event.target.parentElement.setAttribute(
    "new-width",
    event.target.parentElement.getElementsByClassName("element-text")[0]
      .offsetWidth
  );
  event.target.parentElement.getElementsByClassName(
    "element-text"
  )[0].style.overflow = "hidden";
  event.target.parentElement.getElementsByClassName(
    "element-text"
  )[0].style.width = "100%";

  if (
    Number(event.target.parentElement.getAttribute("new-width")) <
    Number(event.target.parentElement.getAttribute("og-width"))
  ) {
    event.target.parentElement.setAttribute("tooltip", "");
  }
}
Overview.propTypes = {
  documentation: PropTypes.array,
  navigationLinks: PropTypes.array,
  token: PropTypes.string,
};
