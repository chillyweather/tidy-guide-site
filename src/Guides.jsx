import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDocs from "./fetchDocs";

export const Guides = () => {
  const [documentation, setDocumentation] = useState([]);
  const [selectedMasterId, setSelectedMasterId] = useState("overview");
  const [overviewStyle, setOverviewStyle] = useState("overview selected");
  const { data } = useQuery({
    queryKey: ["docs"],
    queryFn: fetchDocs,
  });

  useEffect(() => {
    if (data) {
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setDocumentation(sortedData);
    }
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      highLightBtn();
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedMasterId]);

  const navigate = useNavigate();

  function handleGuidesClick() {
    navigate(`/guide/overview`);
    setSelectedMasterId("overview");
  }

  function handleDocClick(guide) {
    navigate(`/guide/${guide._id}`);
    setSelectedMasterId(guide._id);
  }

  const highLightBtn = () => {
    var x = document
      .getElementsByClassName("documentationIndex")[0]
      .querySelectorAll("button");
    var i;
    for (i = 0; i < x.length; i++) {
      if (x[i].className == x[i].id) {
        x[i].classList.add("selected");
      }
    }
  };

  return (
    <div className="guides">
      <h1>Guides</h1>
      <ul className="documentationIndex">
        <button
          onClick={handleGuidesClick}
          id={"overview"}
          className={location.href.split("/")[4]}
        >
          <p>Overview</p>
        </button>
        {!!documentation.length &&
          documentation.map((guide) => {
            const isDraft = guide.draft;
            if (isDraft) {
              return null;
            }

            return (
              <button
                key={guide._id}
                id={guide._id}
                tooltip={guide.title}
                className={location.href.split("/")[4]}
                onClick={() => handleDocClick(guide)}
              >
                <p>{guide.title}</p>
                {guide.inProgress && <div className={"wip"}>WIP</div>}
              </button>
            );
          })}
      </ul>
    </div>
  );
};

Guides.propTypes = {
  token: PropTypes.string,
  documentation: PropTypes.array,
  setDocumentation: PropTypes.func,
  selectedMasterId: PropTypes.string,
  setSelectedMasterId: PropTypes.func,
};
