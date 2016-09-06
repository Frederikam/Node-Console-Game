var GenericRoom = require("./room/genericRoom.js");

module.exports = {

	rooms: {},

	startup: function(){
		this.rooms["-1:-1"] = new GenericRoom(-1, -1, "There is a tree here.");
		this.rooms["0:-1"] = new GenericRoom(0, -1, "There is another tree here.");
		this.rooms["1:-1"] = new GenericRoom(1, -1, "There's nothing here.");
		this.rooms["-1:0"] = new GenericRoom(-1, 0, "You find a small hut here.");
		this.rooms["0:0"] = new GenericRoom(0, 0, "You are at the center.");
		this.rooms["1:0"] = new GenericRoom(1, 0, "There is a lever here.");
		this.rooms["-1:1"] = new GenericRoom(-1, 1, "There is a shiny object on the ground.");
		this.rooms["0:1"] = new GenericRoom(0, 1, "There is nothing here.");
		this.rooms["1:1"] = new GenericRoom(1, 1, "You find yourself at a beach.");
	}

}