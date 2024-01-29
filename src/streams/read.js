import { createReadStream } from "fs";
import { stdout } from "process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const file = path.join(__dirname, "files/fileToRead.txt");
  const rs = createReadStream(file, "utf-8");
  rs.pipe(stdout);
  // Write your code here
};

await read();
