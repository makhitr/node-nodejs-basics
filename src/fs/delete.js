import { rm } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const file = path.join(__dirname, "files/fileToRemove.txt");
  try {
    await rm(file);
  } catch {
    throw new Error("FS operation failed");
  }
  // Write your code here
};

await remove();
