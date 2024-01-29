import { rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldFile = path.join(__dirname, "files/wrongFilename.txt");
  const newFile = path.join(__dirname, "files/properFilename.md");
  try {
    await rename(oldFile, newFile);
  } catch {
    throw new Error("FS operation failed");
  }
  // Write your code here
};

await rename();
