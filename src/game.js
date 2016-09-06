var map = require("./map.js");

var curRoom;

module.exports = {

	startup: function(){
		map.startup();
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
				switch {
					case east:
						
					break;

					case south:

					break;

					case west:

					break;

					case north:

					break

					default:
					console.log("Wat")
					break
				}
			} catch (err) {
				console.log("Pardon me?");
			}
		}else if(input == "enter"){
			
		}else if(input == "leave"){
			
		}else if(input == "examine"){
			console.log(curRoom.getDescription());
		}

		return "Action>";
	}

}