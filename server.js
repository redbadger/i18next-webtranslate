var express = require('express')
  , app = express()
  , fs = require('fs')
  , url = require('url');

// Configuration
app.configure(function() {
    app.use(express.bodyParser());

    app.use(app.router);
    // app.set('view engine', 'jade');
    // app.set('views', __dirname);

    app.use('/app', express.static(__dirname+'/client/app'));
    app.use('/assets', express.static(__dirname+'/client/assets'));
    console.log('/assets', __dirname+'/client/assets');
    app.use('/app/templates', express.static(__dirname+'/client/assets/templates'));

    // for release
    app.use('/release', express.static(__dirname+'/client/dist/release/assets'));
    app.use('/', express.static(__dirname+'/client/dist/release/assets'));
});

app.get("/", function(req, res) {
    return res.sendfile(__dirname+'/index.html');
});

app.get("/favicon.ico", function(req, res) {
    return res.sendfile(__dirname+'/client/assets/favicon.ico');
});
 var http = require('http')
   , server = http.createServer(app)
   , PORT = process.env.PORT || 3000;

server.listen(PORT);
console.log('Started on', PORT);