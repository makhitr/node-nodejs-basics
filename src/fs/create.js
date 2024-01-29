import path from "path";
import { fileURLToPath } from "url";
import { appendFile } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const file = path.join(__dirname, "files/fresh.txt");
  appendFile(file, "I am fresh and young", { flag: "ax" }, (err) => {
    if (err) throw new Error("FS operation failed ");
  });
  // Write your code here
};

await create();
