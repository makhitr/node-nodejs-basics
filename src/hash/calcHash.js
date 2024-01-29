const { createHash } = await import("node:crypto");
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const file = path.join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  hash.update(file);
  console.log(hash.digest("hex"));
  // Write your code here
};

await calculateHash();
