import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IconMail, IconEye } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
// import fetchDocs from "./fetchDocs";
import fetchCollections from "./fetchCollections";

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
    alert("Invalid email or password");
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const Login = () => {
  const [foundToken, setFoundToken] = useState("");
  const { refetch } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
    enabled: !!foundToken,
  });

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await login(email, password);
    const token = response.token;
    setFoundToken(token);
    const userId = response._id;
    const company = response.company;
    if (token) {
      refetch();
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("company", company);
      localStorage.setItem("email", email);
      navigate("/");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email:</label>
          <input type="email" placeholder="Email" ref={emailRef} />
          <IconMail
            size={24}
            stroke={2}
            className="icon icon-tabler icon-tabler-mail"
          />
        </div>
        <div className="inputDiv">
          <label>Password:</label>
          <input type="password" placeholder="password" ref={passwordRef} />
          <IconEye
            size={24}
            stroke={2}
            className="icon icon-tabler icon-tabler-eye"

            // onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string,
};
