import { useNavigate } from "react-router-dom";

const NavBar = () => {
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

  return (
    <div className="navbar">
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleGuidesClick}>Browse Guides</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <h1>Tidy Guide Web</h1>
      <NavBar />
    </div>
  );
};
