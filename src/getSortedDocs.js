import getCollctionDocs from "./fetchCollectionDocs";

export async function getSortedDocs(collectionId) {
  const data = await getCollctionDocs(collectionId);
  if (data) {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  }
  return [];
}
