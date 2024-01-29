import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const files = await readdir(path.join(__dirname, "files"));
    for (const file of files) console.log(file);
  } catch {
    throw new Error("FS operation failed");
  }
  // Write your code here
};

await list();
