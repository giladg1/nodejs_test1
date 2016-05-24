var checkUrl = require('./checkUrlModule.js');

// test the url parser module
var ourObject = checkUrl.parseURL('http://www.node.org/docs/index.html');

console.log(ourObject);