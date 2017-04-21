module.exports = function(app,config){
	_this = {
		consecutiveDuplicate : function(req,res){
			var str,ch1,ch2,responseStr = '';
			str = req.query.str;
			for(i = 0 ; i < str.length; i++){
				ch1 = str.charAt(i);
				ch2 = str.charAt(i+1);
				if(ch1 != ch2){
					responseStr = responseStr + ch1;
				}
			}

			res.send({str : responseStr});
		},
		ConsecutiveElements : function(req,res){
			var a = req.query.array;
			var i,j,X = a[0],Y=1;
			var n = Math.max.apply(Math, a);
			for(var i  = 1; i < a.length; i++){
				X ^= a[i];
			}

			for(var j = 2; j <= n; j++){
				Y ^= j;
			}
			var x = X ^ Y;
			var result = (x ? true : false);
			res.send({status : result});
		}

	};

	return _this;
}