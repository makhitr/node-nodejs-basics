import { stdin } from "process";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const file = path.join(__dirname, "files/fileToWrite.txt");
  const ws = createWriteStream(file);
  stdin.pipe(ws);
  // Write your code here
};

await write();
