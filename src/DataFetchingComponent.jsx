/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { selectedCollectionAtom, currentDocumentationsAtom } from "./atoms";

import fetchCollections from "./fetchCollections";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";

import { Home } from "./Home-New";
import { DetailsPage } from "./DetailsPage";
import { Overview } from "./Overview";
import { getSortedDocs } from "./getSortedDocs";

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

  const docsQuery = useQuery({
    queryKey: ["docs", selectedCollection?._id],
    queryFn: () => getSortedDocs(selectedCollection?._id),
    enabled: collectionsQuery.isFetched && !!selectedCollection,
  });

  useEffect(() => {
    if (docsQuery.data) {
      setCurrentDocumentations(docsQuery.data);
    }
  }, [docsQuery.data, setCurrentDocumentations]);

  return (
    <div>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/guide/:id" element={<DetailsPage />} />
          <Route path="/guide/overview" element={<Overview />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
