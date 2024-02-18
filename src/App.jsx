/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataFetchingComponent from "./DataFetchingComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DataFetchingComponent />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
