import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const source = path.join(__dirname, "files");
  const destination = path.join(__dirname, "files_copy");

  try {
    await fs.cp(source, destination, {errorOnExist: true, recursive: true, force: false})
  } catch {
    throw new Error("FS operation failed")
  }
};

await copy();
