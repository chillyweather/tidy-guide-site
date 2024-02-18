import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchDocs from "./fetchDocs";

export const Guides = () => {
  const [documentation, setDocumentation] = useState([]);
  const navigate = useNavigate();
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

  return (
    <div className="guides">
      <h1>Guides</h1>
      <ul className="documentationIndex">
        {!!documentation.length &&
          documentation.map((guide) => {
            const isDraft = guide.draft;
            if (isDraft) {
              return null;
            }

            const highLightBtn = () => {
              var x = document.getElementsByClassName("documentationIndex")[0].querySelectorAll("button");
              var i;
              for (i = 0; i < x.length; i++) {
                if (x[i].className == x[i].id) {
                  x[i].classList.add("selected");
                }
              }
            }
            return (
              <button
                key={guide._id}
                id={guide._id}
                className={location.href.split("/")[4]}
                onClick={() => navigate(`/guide/${guide._id}`)}
                onLoad={setTimeout(function(){ highLightBtn() }, 500)}
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
