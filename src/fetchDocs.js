const fetchDocs = async ({ queryKey }) => {
  const id = queryKey[1];
  console.log("id", id);

  const path = `https://api.tidyframework.com/api/docs`;
  const token = localStorage.getItem("token");
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

export default fetchDocs;

// export async function getDocumentation(token, documentId) {
//   const path = `https://api.tidyframework.com/api/docs/${documentId}`;
//   const response = await fetch(path, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//
//   const result = await response.json();
//   return result;
// }
