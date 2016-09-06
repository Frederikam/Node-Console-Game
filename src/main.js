const readline = require('readline');

const con = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

con.question('Hello? ', (answer) => {
	console.log(answer);
});