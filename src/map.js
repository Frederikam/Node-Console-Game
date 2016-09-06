var GenericRoom = require("./room/genericRoom.js");

module.exports = {

	rooms: {},

	startup: function(){
		this.rooms["-1:-1"] = new GenericRoom(-1, -1, "There is a tree here.");
	}

}