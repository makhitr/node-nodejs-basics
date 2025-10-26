import path from "node:path";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");

  const stream = createReadStream(filePath);
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("end", () => console.log(hash.digest("hex")));
};

calculateHash();
