import { useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

async function login(email, password) {
  const path = "https://api.tidyframework.com/api/users/login";
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await login(email, password);
    const token = response.token;
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/");

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};
