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
  const savedToken = localStorage.getItem("token");
  const [selectedCollection, setSelectedCollection] = useAtom(
    selectedCollectionAtom
  );
  const [, setCurrentDocumentations] = useAtom(currentDocumentationsAtom);

  const collectionsQuery = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
    enabled: !!savedToken,
  });

  useEffect(() => {
    if (collectionsQuery.data && userId) {
      const ownCollection = collectionsQuery.data.filter(
        (collection) => collection.owner === userId
      );
      setSelectedCollection(ownCollection[0]);
    }
  }, [collectionsQuery.data, setSelectedCollection, userId]);

  useEffect(() => {
    if (selectedCollection) {
      const collectionId = selectedCollection._id;
      getCurrentDocs(collectionId);
    }
  }, [selectedCollection]);

  async function getCurrentDocs(collectionId) {
    const data = await getCollctionDocs(collectionId);
    if (data) {
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setCurrentDocumentations(sortedData);
    }
  }

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
