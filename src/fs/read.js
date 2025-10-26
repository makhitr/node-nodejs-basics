import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const file = path.join(__dirname, "files/fileToRead.txt");
  try {
    const data = await fs.readFile(file, "utf8" );
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();

