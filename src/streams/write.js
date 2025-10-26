import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files/fileToWrite.txt");
  const stream = createWriteStream(filePath, "utf-8");
  stdin.pipe(stream);
};

await write();
