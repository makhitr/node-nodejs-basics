import { spawn } from 'node:child_process'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const file = path.join(__dirname, 'files/script.js')
    spawn('node', [file, ...args], {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
    // Write your code here
};
// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
