import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldName = path.join(__dirname, "files/wrongFilename.txt");
  const newName = path.join(__dirname, "files/properFilename.md");
  try {
    await fs.rename(oldName, newName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
