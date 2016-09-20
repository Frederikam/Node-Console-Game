var game = require("./game.js");

const readline = require('readline');

const con = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

game.startup();

var onInput = function(input) {
	//console.log("You said: " + input);

	var out = game.tick(input);
	console.log("\n");

	getInput(out);
}

var getInput = function(question){
	con.question(question + " ", (answer) => {
		onInput(answer);
	});
}

getInput("Action>");