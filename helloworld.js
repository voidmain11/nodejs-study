// JavaScript source code
//var http = require('http');
//var fs = require('fs');
//var app = http.createServer(function (request, response) {
//    var url = request.url;
//    if (request.url == '/') {
//        url = '/index.html';
//    }
//    if (request.url == '/favicon.ico') {
//        response.writeHead(404);
//        response.end();
//        return;
//    }
//    response.writeHead(200);
//    response.end(fs.readFileSync(__dirname + url));

//});
//console.log("실행 포트 번호는 : " + process.env.PORT);
//app.listen(process.env.PORT || 3000);

// console.log('hello world');
// var Airtable = require('/node_modules/airtable');

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyjOTizIdrde7uri' }).base('appGXr7cIzp8rJTwX');
const table = base("유무념 번수");
const getRecords = async () => {
   const records = await table.select().firstPage();
   console.log('my big bull');
   console.log('this is '+ records);
   console.log(records);
}
getRecords();
