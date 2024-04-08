import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { currentDocumentationsAtom } from "./atoms";
// import fetchDocs from "./fetchDocs";
// import fetchCollections from "./fetchCollections";
import { IconSearch } from "@tabler/icons-react";

export const Guides = () => {
  const [currentDocumentations] = useAtom(currentDocumentationsAtom);
  const [documentation, setDocumentation] = useState([]);
  const [filteredDocumentation, setFilteredDocumentation] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedMasterId, setSelectedMasterId] = useState("overview");
  // const { data } = useQuery({
  //   queryKey: ["collections"],
  //   queryFn: fetchCollections,
  // });

  useEffect(() => {
    if (currentDocumentations.length) {
      setDocumentation(currentDocumentations);
      setFilteredDocumentation(currentDocumentations);
    }
  }, [currentDocumentations]);
  //
  //   useEffect(() => {
  //     if (data) {
  //       const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
  //       setDocumentation(sortedData);
  //       setFilteredDocumentation(sortedData);
  //     }
  //   }, [data]);

  useEffect(() => {
    if (searchText.length > 0) {
      const filteredData = documentation.filter((element) => {
        return element.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredDocumentation(filteredData);
    } else {
      setFilteredDocumentation(documentation);
    }
  }, [searchText, documentation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      highLightBtn();
    }, 500);

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
      <form>
        <input type="text" className="hidden-input" />
        <div className="flex-search">
          <input
            type="text"
            id="search"
            autoComplete="off"
            placeholder="Type to search..."
            value={searchText}
            onInput={(e) => {
              setSearchText(e.currentTarget.value);
            }}
          />
          <IconSearch />
        </div>
      </form>
      <ul className="documentationIndex">
        <button
          onClick={handleGuidesClick}
          id={"overview"}
          className={location.href.split("/")[4]}
        >
          <p>Overview</p>
        </button>
        {!!filteredDocumentation.length &&
          filteredDocumentation.map((guide) => {
            {
              console.log("filteredDocumentation", filteredDocumentation);
            }
            const isDraft = guide.draft;
            if (isDraft) {
              return null;
            }

            return (
              <button
                key={guide._id}
                id={guide._id}
                // eslint-disable-next-line react/no-unknown-property
                tooltip={guide.title}
                className={location.href.split("/")[4]}
                onClick={() => handleDocClick(guide)}
              >
                <p>{guide.title}</p>
                {guide.inProgress && <div className={"wip"}>WIP</div>}
                <div className="component-length">{guide.docs.length}</div>
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
