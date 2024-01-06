const fetchDoc = async ({ queryKey, token }) => {
  const id = queryKey[1];

  const path = `https://api.tidyframework.com/api/docs/${id}`;
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

export default fetchDoc;

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
