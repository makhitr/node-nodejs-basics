import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "node:util";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const sourceFile = path.join(__dirname, 'files/fileToCompress.txt')
    const destinationFile = path.join(__dirname, 'files/archive.gz')
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(sourceFile);
    const destination = createWriteStream(destinationFile);
    await pipe(source, gzip, destination);
    // Write your code here
};


await compress();
