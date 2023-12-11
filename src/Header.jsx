import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logoTidy from "./assets/TidyLogo.svg";

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGuidesClick = () => {
    navigate("/guides");
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
      <img src={logoTidy} alt="Tidy Logo" onClick={handleHomeClick} />
      {/* <button onClick={handleHomeClick}>Home</button> */}
      {token && <button onClick={handleGuidesClick}>Browse Guides</button>}
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
      {/* <h1>Tidy Guide Web</h1> */}
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
