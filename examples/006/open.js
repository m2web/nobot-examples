const { platform } = require('os');
const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';
const LINUX_PLATFORM = 'linux';

const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;

if (url === undefined) {
  console.error('Please enter a URL, e.g. "http://markmcfadden.net/"');
  process.exit(0);
}

let command;

if (osPlatform === WINDOWS_PLATFORM) {
  command = `start microsoft-edge:${url}`;
} else if (osPlatform === LINUX_PLATFORM) {
  command = `google-chrome ${url}`;
} else {
  command = `open -a "Google Chrome" ${url}`;
}

console.log(`executing command: ${command}`);

exec(command);
