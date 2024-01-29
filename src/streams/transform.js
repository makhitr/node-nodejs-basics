import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const ts = new Transform({
    transform(chunk, enc, callback) {
      const ch = chunk.toString().trim();
      const reversedCh = ch.split("").reverse().join("");
      callback(null, `${reversedCh}\n`);
    }
  });
  stdin.pipe(ts).pipe(stdout);
  // Write your code here
};

await transform();
