// JavaScript source code
// console.log('hello world');
 var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
   var url = request.url;
   if (request.url == '/') {
       url = '/index.html';
   }
   if (request.url == '/favicon.ico') {
       response.writeHead(404);
       response.end();
       return;
   }
   response.writeHead(200);
   response.end(fs.readFileSync(__dirname + url));

});
console.log("���� ��Ʈ ��ȣ�� : " + process.env.PORT);
app.listen(process.env.PORT || 3000);


//var Airtable = require('airtable');
//win.focus();
//var base = new Airtable({ apiKey: 'keyjOTizIdrde7uri' }).base('appGXr7cIzp8rJTwX');
//const table = base("������ ����");
//const getRecords = async () => {
//    const records = table.select().firstPage();
//    console.log('my big bull');
//    console.log('this is '+ records);
//}
//getRecords();
