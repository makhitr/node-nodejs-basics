import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files/fileToRead.txt");
  const stream = createReadStream(filePath, "utf-8");
  stream.pipe(stdout);
};

await read();
