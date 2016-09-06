var game = require("./game.js");
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
			default:
				game.expressConfusion();
				break;
		}

		var newRoom = map.rooms[this.newX+":"+this.newY];
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