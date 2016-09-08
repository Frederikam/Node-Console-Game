var game = require("../game.js");
var map = require("../map.js");
var main = require("../main.js");

module.exports = function(desc){
	this.desc = desc;

	this.getNearbyRoom = function(direction){
		return null;
	}

	this.getDescription = function(){
		return this.desc;
	};

	this.enter = function(){
		return null;
	};

	this.exit = function(){
		return map.rooms["-1:0"];
	};

}