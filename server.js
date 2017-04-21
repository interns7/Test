    // set up ========================
    var express  = require('express');
    var app      = express(); 
    var http = require('http');
    var bodyParser = require('body-parser');

    //configuaration
    app.set('port',process.env.PORT || 3033);
    
   //middleware
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());
    
   //config library
   var config = require(__dirname+"/src/config/config.js")();

   //routes setup
   require('./routes/module.js')(app,config);

    http.createServer(app).listen(app.get('port'),function(){
        console.log('server is running on '+app.get('port'));
    })

