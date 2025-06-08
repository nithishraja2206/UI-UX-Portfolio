import Blobity from "blobity";
import { initialBlobityOptions } from "./BlobityConfig";

let blobity: Blobity | null = null;

export const getBlobity = () => {
  if (!blobity) {
    blobity = new Blobity(initialBlobityOptions);
    // @ts-ignore
    window.blobity = blobity;
  }
  return blobity;
};

export const destroyBlobity = () => {
  try {
    blobity?.destroy();
  } catch (e) {
    console.warn("Blobity destroy failed:", e);
  }
  blobity = null;
};
