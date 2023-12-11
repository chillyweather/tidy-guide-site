import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Guides = ({
  token,
  documentation,
  setDocumentation,
  selectedMasterId,
  setSelectedMasterId,
}) => {
  const navigate = useNavigate();
  async function handleGetDocumentation(token) {
    try {
      const response = await getDocumentation(token);
      if (response) {
        setDocumentation(response);
      }
      console.log("response :>> ", response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (token) {
      handleGetDocumentation(token);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("documentation :>> ", documentation);
  }, [documentation]);
  return (
    <div className="guides">
      <h1>Guides</h1>
      <ul className="documentationIndex">
        {documentation.length &&
          documentation.map((guide) => {
            console.log("guide", guide._id);
            return (
              <button
                key={guide._id}
                onClick={() => {
                  setSelectedMasterId(guide._id);
                  navigate(`/guide/${guide._id}`);
                }}
              >
                {guide.docs[0].title}
                {guide.docs[0].inProgress && <div className={"wip"}>WIP</div>}
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

async function getDocumentation(token) {
  console.log("token :>> ", token);
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.tidyframework.com/api/docs",
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}
