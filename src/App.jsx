/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
import { Home } from "./Home";
import { Guides } from "./Guides";

function App() {
  const [token, setToken] = useState(null);
  const savedToken = localStorage.getItem("token");

  useEffect(() => {
    if (savedToken) {
      setToken(savedToken);
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <div className="app">
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setToken} token={token} />}
          />
          <Route path="/guides" element={<Guides token={token} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
