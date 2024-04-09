const fetchCollections = async ({ queryKey }) => {
  const id = queryKey[1];
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const path = `https://api.tidyframework.com/api/collections/${userId}/user-collections`;
  const response = await fetch(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error in GET docs/${id} status: ${response.status}`);
  }

  return response.json();
};

export default fetchCollections;
