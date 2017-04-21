module.exports = function(app,config){
	app.use('/user',require('./userModule')(app,config));
}