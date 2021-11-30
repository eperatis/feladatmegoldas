var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    var url = req.url;
    if (url === '/rest/jsons/init') {
        if (getRandomInt(2) === 0) {
            res.write('{"content": 421327}');
        } else {
            res.write('{"redirectUrl": "/rest/jsons/bba93f12-4ec6-11ec-81d3-0242ac130003"}');
        }
        res.end();
    } else {
        if (url.match('/rest/jsons/*')) {
            if (getRandomInt(2) === 0) {
                res.write('{"content": 421327}');
            } else {
                res.write('{"redirectUrl": "/rest/jsons/bba93f12-4ec6-11ec-81d3-0242ac130003"}');
            }
            res.end();
        }
        res.end();
    }
}).listen(3000, function () {
    console.log("server start at port 3000");
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}