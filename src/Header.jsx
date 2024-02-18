import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logoTidy from "./assets/TidyLogo.svg";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import fetchDocs from "./fetchDocs";

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [documentation, setDocumentation] = useState([]);
  const [firstDoc, setFirstDoc] = useState({}); // eslint-disable-line no-unused-vars
  const { data } = useQuery({
    queryKey: ["docs"],
    queryFn: fetchDocs,
  });

  console.log("data in header", data);

  useEffect(() => {
    if (data) {
      const sortedData = data.toSorted((a, b) =>
        a.title.localeCompare(b.title)
      );
      setDocumentation(sortedData);
    }
  }, [data]);

  useEffect(() => {
    if (documentation.length) {
      setFirstDoc(documentation[0]);
    }
  }, [documentation]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGuidesClick = () => {
    navigate(`/guide/${firstDoc._id}`);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logoTidy} alt="Tidy Logo" onClick={handleHomeClick} />
      </div>
      {token && (
        <button className="browseBTN" onClick={handleGuidesClick}>
          Browse Guides
        </button>
      )}
      {token ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  );
};

export const Header = ({ token, setToken }) => {
  return (
    <div className="header">
      <NavBar token={token} setToken={setToken} />
    </div>
  );
};

NavBar.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};

Header.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};
