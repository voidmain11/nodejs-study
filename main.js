//// JavaScript source code
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
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyjOTizIdrde7uri' }).base('appdiZAdaa8ucIPzt');

base('Projects').select({
    // Selecting the first 3 records in All projects:
    maxRecords: 3,
    view: "All projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
        console.log('Retrieved', record.get('Project name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});