var game = require("./game.js");

const readline = require('readline');

const con = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var gameEnded = false;

var onInput = function(input) {
	//console.log("You said: " + input);

	var out = game.tick(input);
	console.log(" ");

	if(!gameEnded){
		getInput(out);
	}
}

var getInput = function(question){
	con.question(question + " ", (answer) => {
		onInput(answer);
	});
}

module.exports.completeGame = function(){
	console.log("Congratulations, you win!");
	gameEnded = true;
}

game.startup();
getInput("Action>");