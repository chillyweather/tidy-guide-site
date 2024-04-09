async function getCollctionDocs(collectionId) {
  const token = localStorage.getItem("token");
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(
    `https://api.tidyframework.com/api/collections/${collectionId}/docs`,
    {
      method: "GET",
      headers: headersList,
    }
  );
  if (!response.ok) return [];

  const data = await response.json();
  return data;
}

export default getCollctionDocs;
