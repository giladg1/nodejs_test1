var checkUrl = require('./checkUrlModule.js');

// test the url parser module
checkUrl.parseURL('http://www.node.org/docs/index.html');
checkUrl.parseURL('http://ww.ynet'); 
checkUrl.parseURL('http://www.');
