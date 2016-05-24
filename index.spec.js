var checkUrl = require('./index.js');

// test the url parser module
//var ourObject = checkUrl.parseURL('http://www.node.org/docs/index.html');

//console.log(ourObject);

var test = require('tape');

test('timing test', function (t) {
    t.plan(1);

    var origin = checkUrl.parseURL('http://www.node.org/docs/index.html');
    t.deepEqual(origin,
        {
        url: "http://www.node.org/docs/index.html" ,
        host: "www.node.org",
        port: 80,
        file: "index.html",
        path: "/docs/"
        }
    );


});

