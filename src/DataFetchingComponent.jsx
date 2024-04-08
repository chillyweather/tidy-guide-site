import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDocs from "./fetchDocs";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
// import { Home } from "./Home";
import { Home } from "./Home-New";
import { DetailsPage } from "./DetailsPage";
import { Overview } from "./Overview";

export default function DataFetchingComponent() {
  const savedToken = localStorage.getItem("token");
  const [token, setToken] = useState(null);
  const [, setDocumentation] = useState([]);
  const { data } = useQuery({
    queryKey: ["docs"],
    queryFn: fetchDocs,
  });

  useEffect(() => {
    if (data) {
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setDocumentation(sortedData);
    }
  }, [data]);

  useEffect(() => {
    if (savedToken) {
      setToken(savedToken);
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="app">
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setToken} token={token} />}
          />
          {/* <Route
            path="/guides"
            element={<Guides documentation={documentation} />}
          /> */}
          <Route path="/guide/overview" element={<Overview />} />
          <Route path="/guide/:id" element={<DetailsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
