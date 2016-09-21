var game = require("../game.js");
var map = require("../map.js");
var main = require("../main.js");

module.exports = function(x, y, desc){
	this.x = x;
	this.y = y;
	this.desc = desc;

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
		return this.desc;
	};

	this.enter = function(){
		return null;
	};

	this.exit = function(){
		return null;
	};

	this.unlock = function(inv){
		for (var i in inv){
			var item = inv[i];
			if(item == "Golden Key"){
				main.completeGame();
			}
		}

		return false;
	}

}