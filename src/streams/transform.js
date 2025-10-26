import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
     const reverseStream = new Transform({
        transform(chunk, enc, callback) {
            const ch = chunk.toString().trim()
            const reversedCh = ch.split('').reverse().join('');
            callback(null, `${reversedCh}\n`)
        }
    })
    stdin.pipe(reverseStream).pipe(stdout)
};

await transform();
