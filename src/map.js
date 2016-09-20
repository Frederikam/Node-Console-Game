var GenericRoom = require("./room/genericRoom.js");
var RoomWithHut = require("./room/roomWithHut.js");
var RoomHut = require("./room/roomHut.js");

var rooms = {};

rooms["-1:-1"] = new GenericRoom(-1, -1, "You find yourself in a glade.");
rooms["0:-1"] = new GenericRoom(0, -1, "You spot a oak tree here.");
rooms["1:-1"] = new GenericRoom(1, -1, "There's nothing here.");
rooms["-1:0"] = new RoomWithHut(-1, 0, "You find a small hut here.");
rooms["0:0"] = new GenericRoom(0, 0, "You find yourself surrounded by trees to all sides.");
rooms["1:0"] = new GenericRoom(1, 0, "You see a lever here.");
rooms["-1:1"] = new GenericRoom(-1, 1, "You find nothing of interest here.");
rooms["0:1"] = new GenericRoom(0, 1, "You find yourself in a glade.");
rooms.hut = new RoomHut("You are inside the hut.");

module.exports.rooms = rooms;

module.exports.test = 2;