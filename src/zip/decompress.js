import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "node:util";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const sourceFile = path.join(__dirname, 'files/archive.gz')
    const destinationFile = path.join(__dirname, 'files/fileToCompress.txt')
    const pipe = promisify(pipeline);
    const gunzip = createGunzip();
    const source = createReadStream(sourceFile);
    const destination = createWriteStream(destinationFile);
    await pipe(source, gunzip, destination);
    // Write your code here 
};

await decompress();
