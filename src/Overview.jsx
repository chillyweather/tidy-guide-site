import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchDocs from "./fetchDocs";
import PropTypes from "prop-types";
import { Guides } from "./Guides";
import { IconLink } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "./Overview.css";

export const Overview = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState("");
  const { data } = useQuery({
    queryKey: ["docs"],
    queryFn: fetchDocs,
  });

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
            {data &&
              data.length &&
              data.map((doc, index) => (
                <div key={index} className="element-wrapper">
                  <button
                    className="element"
                    onClick={() => navigate(`/guide/${doc._id}`)}
                  >
                    {doc.inProgress && <div className={"wip"}>WIP</div>}
                    <p
                      className="delete-me"
                      style={{ fontSize: "80px", margin: 0 }}
                    >
                      🪣
                    </p>
                  </button>
                  <p className="element-text">{doc.title}</p>
                </div>
              ))}
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
