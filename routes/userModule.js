module.exports = function(app,config){
	var express = require('express');
	var router = express.Router();

	//controller file
	var userController = require('../src/controllers/userController')(app,config);

	router.get('/consecutiveDuplicate',userController.consecutiveDuplicate);
	router.get('/ConsecutiveElements',userController.ConsecutiveElements);

	return router;
}