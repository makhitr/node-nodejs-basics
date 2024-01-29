import os from "node:os";
import { Worker } from "node:worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const file = path.join(__dirname, "worker.js");

  const cpuDNumber = os.cpus().length;
  const arr = [];
  for (let i = 1; i <= cpuDNumber; i++) {
    arr.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(file, {
          workerData: 10 + i
        });
        worker.on("message", (msg) => {
          resolve({ status: "resolved", msg });
        });
        worker.on("error", (err) => {
          reject({ status: "error", err });
        });
      })
    );
  }

  const result = await Promise.all(arr);
  console.log(result);
};

await performCalculations();
