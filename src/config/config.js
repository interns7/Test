module.exports = function(app){
  var Db = require("mongodb").Db;
  var MongoClient = require("mongodb").MongoClient;
  var Server = require("mongodb").Server;
  var db = new Db("interview",new Server("localhost",27017));

  var module = {
    db : function(success,failure){
      db.open(function(err,db){
        if(err){
          failure()
        }else{
          success(db);
        }
      })
    }
  };
  return module;
}