module.exports = function(x, y, desc){
	this.x = x;
	this.y = y;
	this.desc = desc;

	this.canMove =  function(direction){

	};

	this.getDescription = function(){
		return this.desc;
	};

	this.enter = function(){
		return null;
	};

	this.exit = function(){
		return null;
	};

}