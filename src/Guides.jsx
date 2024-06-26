import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import {
  currentDocumentationsAtom,
  filteredDocumentationAtom,
  searchTextAtom,
} from "./atoms";
// import fetchDocs from "./fetchDocs";
// import fetchCollections from "./fetchCollections";
import { IconSearch } from "@tabler/icons-react";

export const Guides = ({ setIsImageOpen }) => {
  const [currentDocumentations] = useAtom(currentDocumentationsAtom);
  const [filteredDocumentation, setFilteredDocumentation] = useAtom(
    filteredDocumentationAtom
  );
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [documentation, setDocumentation] = useState([]);
  const [selectedMasterId, setSelectedMasterId] = useState("overview");

  useEffect(() => {}, []);

  useEffect(() => {
    if (currentDocumentations.length) {
      setDocumentation(currentDocumentations);
      setFilteredDocumentation(currentDocumentations);
    }
  }, [currentDocumentations]);

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
    setIsImageOpen(false);
    setSearchText("");
    navigate(`/guide/overview`);
    setSelectedMasterId("overview");
  }

  function handleDocClick(guide) {
    setIsImageOpen(false);
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
        {!!currentDocumentations.length &&
          filteredDocumentation.map((guide) => {
            if (guide.draft) {
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
  setIsImageOpen: PropTypes.func,
};
