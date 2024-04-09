/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { selectedCollectionAtom, currentDocumentationsAtom } from "./atoms";
// import fetchDocs from "./fetchDocs";
import fetchCollections from "./fetchCollections";
import getCollctionDocs from "./fetchCollectionDocs";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
// import { Home } from "./Home";
import { Home } from "./Home-New";
import { DetailsPage } from "./DetailsPage";
import { Overview } from "./Overview";

export default function DataFetchingComponent() {
  const userId = localStorage.getItem("userId");
  const [selectedCollection, setSelectedCollection] = useAtom(
    selectedCollectionAtom
  );
  const [, setCurrentDocumentations] = useAtom(currentDocumentationsAtom);

  // const savedToken = localStorage.getItem("token");
  // const [token, setToken] = useState(null);

  const { data } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
  });

  useEffect(() => {
    if (data && userId) {
      console.log("data", data);
      console.log("userId", userId);
      const ownCollection = data.filter(
        (collection) => collection.owner === userId
      );
      console.log("ownCollection", ownCollection);
      setSelectedCollection(ownCollection[0]);
    }
  }, [data, setSelectedCollection, userId]);

  async function getCurrentDocs(collectionId) {
    const data = await getCollctionDocs(collectionId);
    if (data) {
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setCurrentDocumentations(sortedData);
    }
  }

  useEffect(() => {
    if (selectedCollection) {
      const collectionId = selectedCollection._id;
      getCurrentDocs(collectionId);
    }
  }, [selectedCollection]);

  useEffect(() => {
    // if (selectedCollection) {
    console.log("selectedCollection", selectedCollection);
    // }
  }, [selectedCollection]);

  // useEffect(() => {
  //   if (data) {
  //     const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
  //     setDocumentation(sortedData);
  //   }
  // }, [data]);
  //
  //   useEffect(() => {
  //     if (savedToken) {
  //       setToken(savedToken);
  //     }
  //   }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
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
