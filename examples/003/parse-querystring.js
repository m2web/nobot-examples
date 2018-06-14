const querystring = require('querystring');

const url = 'https://someurl.com?myName=Mark&myAge=57&myComment=yes+I+am+old';
const parsedUrl = querystring.parse(url.substr(url.indexOf('?') + 1));

console.log(`Hello my name is: ${parsedUrl.myName}`);
console.log(`My age: ${parsedUrl.myAge}`);
console.log(`Oh and ${parsedUrl.myComment}`);
