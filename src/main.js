const readline = require('readline');

const con = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var onInput = function(input) {
	console.log("You said: " + input);

	getInput(input);
}

var getInput = function(question){
	con.question(question + " ", (answer) => {
		onInput(answer);
	});
}

getInput("Hello, human");