var map = require("./map.js");

var curRoom;
var inventory = [];

module.exports = {

	startup: function(){
		var intro = "Welcome to adventure!!"
		 + "\n\nSomewhere nearby a cave is located."
		 + "\nIt is said to be hiding massive fortunes"
		 + "\nin treasure and gold sought after by many."
		 + "\nThough it appears that you are both blind and deaf,"
		 + "\nI will be your eyes and ears for this journey."
		 + "\nDirect me with commands of 1 or 2 words "
		 + "\nand I shall guide you to glory and riches!"
		 + "\n\nType HELP for more info.";
		console.log(intro);
		this.changeRoom(map.rooms["0:0"]);
		console.log("\n");
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
		}else if(input.startsWith("pull")){
			if(curRoom.pull != null){
				if(curRoom.pull()){

				} else {
					console.log("You already pulled that!");
				}
			} else {
				console.log("There doesn't appear to be anything to pull here!");
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
		}else if(input == "unlock"){
			if(curRoom.unlock){
				if(!curRoom.unlock(inventory)){
					console.log("Can't unlock that with what we currently have.")
				}
			} else {
				console.log("There's nothing to unlock here.")
			}
		}else if(input == "help"){
			console.log("GO\tMOVE");
			console.log("ENTER\tEXIT");
			console.log("UNLOCK\tEXAMINE");
			console.log("GET\tPULL");
			console.log("N\tE");
			console.log("S\tW");
			console.log("HELP");
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
