import { Worker } from "node:worker_threads";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const file = path.join(__dirname, "worker.js");
  const cpuCount = os.cpus().length;
  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    const n = 10 + i;

    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(file);
        worker.on("message", (msg) => {
          resolve(msg);
        });
        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });
        worker.postMessage(n);
      })
    );
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
