import fs from 'fs/promises';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    const file = path.join(__dirname, "files/fresh.txt");
    await fs.writeFile(file, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
