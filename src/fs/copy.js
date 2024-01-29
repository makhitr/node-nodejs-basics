import path from "path";
import { fileURLToPath } from "url";
import { copyFile, readdir, mkdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const folder = path.join(__dirname, "files");
  const newFolder = path.join(__dirname, "files_copy");
  try {
    const files = await readdir(folder, { withFileTypes: true });
    await mkdir(newFolder);
    files.map((file) => {
      const oldPath = path.join(folder, file.name);
      const newPath = path.join(newFolder, file.name);
      copyFile(oldPath, newPath);
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
  // Write your code here
};

await copy();
