import { atom } from "jotai";

export const tokenAtom = atom("");
export const userIdAtom = atom("");
export const companyAtom = atom("");
export const emailAtom = atom("");

export const selectedCollectionAtom = atom(null);
export const currentDocumentationsAtom = atom([]);
export const filteredDocumentationAtom = atom([]);
export const searchTextAtom = atom("");
export const isBrowseGuidesOpenAtom = atom(false);

export const selectedImageLinkAtom = atom("");
export const isImageOpenAtom = atom(false);
