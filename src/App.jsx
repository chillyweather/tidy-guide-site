/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./Header";
import { Login } from "./Login";
import { Home } from "./Home";
import { Guides } from "./Guides";
import { DetailsPage } from "./DetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [token, setToken] = useState(null);
  const savedToken = localStorage.getItem("token");
  const [documentation, setDocumentation] = useState([]);
  const [navigationLinks, setNavigationLinks] = useState([]);
  const [selectedMasterId, setSelectedMasterId] = useState("");

  useEffect(() => {
    if (savedToken) {
      setToken(savedToken);
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (documentation.length > 0) {
      if (selectedMasterId.length > 0) {
        const data = documentation.find((e) => e._id === selectedMasterId).docs;
        const keys = Object.keys(data);
        const newLinks = keys.reduce((links, key, index) => {
          const element = data[key];
          if (
            element.datatype &&
            element.publish &&
            element.datatype !== "header"
          ) {
            links.push([element.title, index]);
          }
          return links;
        }, []);
        setNavigationLinks(newLinks);
      }
    }
  }, [documentation, selectedMasterId]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header token={token} setToken={setToken} />
          <Routes>
            <Route
              path="/login"
              element={<Login setToken={setToken} token={token} />}
            />
            <Route
              path="/guides"
              element={
                <Guides
                  token={token}
                  documentation={documentation}
                  setDocumentation={setDocumentation}
                  selectedMasterId={selectedMasterId}
                  setSelectedMasterId={setSelectedMasterId}
                />
              }
            />
            <Route
              path="/guide/:id"
              element={
                <DetailsPage
                  documentation={documentation}
                  navigationLinks={navigationLinks}
                />
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
