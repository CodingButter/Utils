(function(window){

	Array.prototype.trim = function(){
			var nw_ar = new Array();
			this.forEach(function(t){
				if(t.constructor===Array){
					t.trim();
				}else if(t.constructor===String){
				try{
					t = t.trim();
				}catch(err){
					console.log(err);
				}
			}
			nw_ar.push(t);
		});
		return nw_ar;
	}
	
})(window);
