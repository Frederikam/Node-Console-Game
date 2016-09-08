var GenericRoom = require("./room/genericRoom.js");
var RoomWithHut = require("./room/roomWithHut.js");
var RoomHut = require("./room/roomHut.js");

var rooms = {};

rooms["-1:-1"] = new GenericRoom(-1, -1, "There is a tree here.");
rooms["0:-1"] = new GenericRoom(0, -1, "You spot a tree.");
rooms["1:-1"] = new GenericRoom(1, -1, "There's nothing here.");
rooms["-1:0"] = new RoomWithHut(-1, 0, "You find a small hut here.");
rooms["0:0"] = new GenericRoom(0, 0, "You are at the center of an island.");
rooms["1:0"] = new GenericRoom(1, 0, "You see a lever here.");
rooms["-1:1"] = new GenericRoom(-1, 1, "There is a shiny object on the ground.");
rooms["0:1"] = new GenericRoom(0, 1, "There is nothing here.");
rooms.hut = new RoomHut("You are inside the hut.");

module.exports.rooms = rooms;

module.exports.test = 2;