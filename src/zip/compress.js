import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const sourceFile = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationFile = path.join(__dirname, "files", "archive.gz");

  await pipeline(
    createReadStream(sourceFile),
    createGzip(),
    createWriteStream(destinationFile)
  );
};

await compress();
