(function(window){
	
	var Smiley = function(){
	}
	Smiley.prototype.moods = {"sad":":(","eh":":|","happy":":)"};
	Smiley.prototype.mood;
	Smiley.prototype.Smile = function(){
		alert(this.moods[this.mood]);
	}
	
	window.Smiley = Smiley;
	
})(window);
