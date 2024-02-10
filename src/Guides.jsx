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
            return (
              <button
                key={guide._id}
                id={guide._id}
                onClick={() => navigate(`/guide/${guide._id}`)}
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
