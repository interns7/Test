var obj = {

	multi_thread:function(_calls,_join)
    {
    	var i=-1,j=0;
    	while(++i<_calls.length)
    		_calls[i](function(){
    			if(++j==_calls.length)
    				_join();
    		});
    	if(i==0) _join();
    }
}
obj.multi_thread = obj.multi_thread;
module.exports = obj; 