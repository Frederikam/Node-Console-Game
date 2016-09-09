var map = require("./map.js");

var curRoom;
var inventory = [];

module.exports = {

	startup: function(){
		this.changeRoom(map.rooms["0:0"]);
	},

	changeRoom: function(newRoom){
		curRoom = newRoom;
		console.log(curRoom.getDescription());
	},

	tick: function(input){

		/*
			go <direction>
			move <direction>
			enter
			leave
			examine
		*/

		input = input.trim();
		input = input.toLowerCase();

		if(input.startsWith("go") || input.startsWith("move")){
			try{
				var direction = /\w+\s+(\w+)/.exec(input)[1];//eg "west", "north", etc
				switch(direction){
					case "n":
					case "north":
						this.goDirection(0);
						break;
					case "e":
					case "east":
						this.goDirection(1);
						break;
					case "s":
					case "south":
						this.goDirection(2);
						break;
					case "w":
					case "west":
						this.goDirection(3);
						break;
					default:
						this.expressConfusion();
						break;
				}
			} catch (err) {
				console.log("Go where?")
			}
		}else if(input.startsWith("get")){
			var matches = /\w+\s+(\w+)/.exec(input);

			if(matches){
				var arg = matches[1];
				this.getItem(arg);
			} else {
				console.log("Get what?");
			}
		}else if(input == "enter"){
			var newRoom = curRoom.enter();
			if(newRoom == null){
				console.log("There is nothing to enter here.")
			} else {
				this.changeRoom(newRoom);
			}
		}else if(input == "exit"){
			var newRoom = curRoom.exit();
			if(newRoom == null){
				console.log("There is nothing to exit here.")
			} else {
				this.changeRoom(newRoom);
			}
		}else if(input == "examine"){
			console.log(curRoom.getDescription());
		}else{
			//These are move shortcuts. You could say "e" to go east for example. 
			switch(input){
				case "n":
				case "north":
					this.goDirection(0);
					break;
				case "e":
				case "east":
					this.goDirection(1);
					break;
				case "s":
				case "south":
					this.goDirection(2);
					break;
				case "w":
				case "west":
					this.goDirection(3);
					break;
				default:
					this.expressConfusion();
					break;
			}
		}

		return "Action>";
	},

	expressConfusion: function(){
		var strings = [
			"Pardon me?",
			"You need to speak louder.",
			"I don't understand that.",
			"You're not making any sense",
			"What?",
			"I'm sorry?",
			"Excuse me?",
			"Please speak clearly.",
			"Huh?"
		]
		console.log(strings[Math.floor(Math.random() * strings.length)]);
	},

	//Called when we invoke "go north", for example
	goDirection: function(direction){
		var newRoom = curRoom.getNearbyRoom(direction);
		if(newRoom){
			this.changeRoom(newRoom);
		} else {
			console.log("You can't go that way.");
		}
	},

	getItem: function(arg){
		var func = curRoom.getItem;
		if(func){
			var item = func(arg);
			if(item){
				inventory[inventory.length] = item;
				console.log("You found '" + item + "'!");
				return;
			}
		}
		console.log("Couldn't find '" + arg + "' here.");
	}

};
