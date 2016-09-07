var GenericRoom = require("./room/genericRoom.js");

var rooms = {};

rooms["-1:-1"] = new GenericRoom(-1, -1, "There is a tree here.");
rooms["0:-1"] = new GenericRoom(0, -1, "There is another tree here.");
rooms["1:-1"] = new GenericRoom(1, -1, "There's nothing here.");
rooms["-1:0"] = new GenericRoom(-1, 0, "You find a small hut here.");
rooms["0:0"] = new GenericRoom(0, 0, "You are at the center.");
rooms["1:0"] = new GenericRoom(1, 0, "There is a lever here.");
rooms["-1:1"] = new GenericRoom(-1, 1, "There is a shiny object on the ground.");
rooms["0:1"] = new GenericRoom(0, 1, "There is nothing here.");

module.exports.rooms = rooms;

module.exports.test = 2;