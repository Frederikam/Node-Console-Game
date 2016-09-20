var game = require("../game.js");
var map = require("../map.js");
var main = require("../main.js");

module.exports = function(desc){
	this.desc = desc;
	this.keyTaken = false;

	this.getNearbyRoom = function(direction){
		return null;
	};

	this.getDescription = function(){
		if(this.keyTaken){
			return this.desc + "\nThere used to be a key here, but you took it.";
		} else {
			return this.desc + "\nThere's a key in one of the cupboards.";
		}
	};

	this.enter = function(){
		return null;
	};

	this.exit = function(){
		return map.rooms["-1:0"];
	};

	this.getItem = function(arg){
		var hut = map.rooms["hut"];
		if(!hut.keyTaken && arg == "key"){
			hut.keyTaken = true;
			return "Golden Key"
		}
	};

}