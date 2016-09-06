var map = require("./map.js");

module.exports = function(x, y, desc){
	this.x = x;
	this.y = y;
	this.desc = desc;

	this.getNearbyRoom = function(direction){
		var newX = this.x;
		var newY = this.y;

		switch(direction){
			case "north":
				newY--;
				break;
			case "east":
				newX++;
				break;
			case "south":
				newY++;
				break;
			case "west":
				newX--;
				break;
			case default:
				console.log("Ugyldig retning")
				break;
		}

		var newRoom = map.rooms[this.x+":"+this.y];
		return newRoom;
	}

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