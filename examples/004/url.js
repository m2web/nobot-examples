const url = require('url');

const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered === undefined) {
  console.log('Please pass a URL e.g. https://search.com/?q=mowanna');
  process.exit(0);
}

const {
  protocol, slashes, host, query, href
} = url.parse(urlEntered);

console.log(`Using protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Using host: ${host}`);
console.log(`Using query: ${query}`);
console.log(`Using href: ${href}`);
