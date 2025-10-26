import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const sourceFile = path.join(__dirname, "files", "archive.gz");
  const destinationFile = path.join(__dirname, "files", "fileToCompress.txt");

  await pipeline(
    createReadStream(sourceFile),
    createGunzip(),
    createWriteStream(destinationFile)
  );
};

await decompress();
