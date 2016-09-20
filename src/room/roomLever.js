var game = require("../game.js");
var map = require("../map.js");
var main = require("../main.js");

module.exports = function(x, y, desc){
	this.x = x;
	this.y = y;
	this.desc = desc;
	this.isPulled = false;

	this.getNearbyRoom = function(direction){
		var newX = this.x;
		var newY = this.y;

		switch(direction){
			case 0:
				newY--;
				break;
			case 1:
				newX++;
				break;
			case 2:
				newY++;
				break;
			case 3:
				newX--;
				break;
			default:
				game.expressConfusion();
				break;
		}

		var newRoom = map.rooms[newX+":"+newY];
		return newRoom;
	}

	this.getDescription = function(){
		if(this.isPulled){
			return this.desc + "\nIt has already been pulled.";
		} else {
			return this.desc;
		}
	};

	this.enter = function(){
		return null;
	};

	this.exit = function(){
		return null;
	};

	this.pull = function(){
		if(this.isPulled){
			return false;
		} else {
			this.isPulled = true;
			map.onLeverPull();
			return true;
		}
	}

}