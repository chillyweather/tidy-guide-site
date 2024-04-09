import { useState } from "react";
import { useAtom } from "jotai";
import { selectedCollectionAtom } from "./atoms";
import PropTypes from "prop-types";

export const CollectionsDropdown = ({ options, onSelect }) => {
  const [selectedCollection, setSelectedCollection] = useAtom(
    selectedCollectionAtom
  );
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("userId");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedCollection(option);
    setIsOpen(false);
    onSelect(option || {});
  };

  return (
    <div className="dropdown-comp">
      <button
        className="dropdown-toggle"
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
      >
        {selectedCollection && (
          <div>{selectedCollection.name || "Select an option"}</div>
        )}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                id={userId === option.owner && "admin-item"}
                className={"dropdown-item"}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectOption(option);
                  // setTimeout(function(){ window.open(window.location.origin, "_self") }, 500);
                }}
              >
                <div>{option.name}</div>
                {userId === option.owner && <div className="tag admin"></div>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

CollectionsDropdown.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
  currentUserId: PropTypes.string,
  selectedCollection: PropTypes.object,
  setSelectedCollection: PropTypes.func,
};
