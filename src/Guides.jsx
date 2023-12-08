import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Guides = ({ token }) => {
  const [documentation, setDocumentation] = useState([]);

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
      <h2>Guides</h2>
      <ul className="documentationIndex">
        {documentation.length &&
          documentation.map((guide) => {
            console.log("guide", guide);
            return <button key={guide._id}>{guide.docs[0].title}</button>;
          })}
      </ul>
    </div>
  );
};

Guides.propTypes = {
  token: PropTypes.string,
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
