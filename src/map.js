var GenericRoom = require("./room/genericRoom.js");
var RoomWithHut = require("./room/roomWithHut.js");
var RoomLever = require("./room/roomLever.js");
var RoomHut = require("./room/roomHut.js");

var leversPulled = 0;

var rooms = {};

rooms["-1:-1"] = new GenericRoom(-1, -1, "You find yourself in a glade at the foot of a mountain.");
rooms["0:-1"] = new GenericRoom(0, -1, "There is a solid mountain wall to the north.");
rooms["1:-1"] = new GenericRoom(1, -1, "You find yourself at the foot of a mountain.");
rooms["-1:0"] = new RoomWithHut(-1, 0, "You find a small hut here.");
rooms["0:0"] = new GenericRoom(0, 0, "You find yourself surrounded by trees to all sides.\nYou appear to be in a small valley.");
rooms["1:0"] = new RoomLever(1, 0, "You see a lever here.");
rooms["-1:1"] = new GenericRoom(-1, 1, "You find nothing of interest here.");
rooms["0:1"] = new GenericRoom(0, 1, "You find yourself in a glade.");
rooms["1:1"] = new GenericRoom(1, 1, "The woods here are thick along the foot of a mountain.\nYou hear a stream of water coming from the mountain.");
rooms.hut = new RoomHut("You are inside the hut.");

module.exports.rooms = rooms;

module.exports.onLeverPull = function(){
	leversPulled++;

	if(leversPulled === 1){
		console.log("You hear a subtle rumbling sound as you pull the lever!");
		rooms["-1:-1"] = new RoomLever(-1, -1, rooms["-1:-1"].getDescription() + "\nA lever has been revealed from the ground!");
	} else if(leversPulled === 2){
		console.log("Once again you hear a faint rumbling sound as you pull the second lever!");
		rooms["1:1"] = new RoomLever(1, 1, rooms["1:1"].getDescription() + "\nYou find that a new leaver has been revealed within the woods here!");
	} else if(leversPulled === 3){
		console.log("You pull the leaver and hear some very noisy grinding from beneath!");
		rooms["0:-1"] = new GenericRoom(0, -1, rooms["0:-1"].getDescription() + "\nAn opening in the rock wall has appeared.");
	}

};