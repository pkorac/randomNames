#!/usr/bin/env node


/*

	Random names generator

	Example:
	./randomNames.js -b car -l 3 -n 100 -p

	Flags:
	-n 400			how many names to generate
	-b something	the base (no spaces)
	-p 				prepend the random characters or not
	-l 				length of the generated string

	Piping:
	You can pipe the printout into a text file simply by typing this:
	./randomNames -b car -l 3 -n 100 -p > names.txt

*/

var fs = require('fs');

var howMany = 10;
var prepend = false;
var base = "";
var length = 5;

var helpOnly = false;

var characters = "abcdefghijklmnoprqstvuwxz";
var rndNames = [];


if ( process.argv[2] && !isNaN( process.argv[2] ) ){
	howMany = process.argv[2];
}


for ( var i = 2; i < process.argv.length; i++ ){
	var param = process.argv[i];
	var value = process.argv[i+1];
	if( param === "-n" && value && !isNaN( value ) ){
		howMany = value;
	}

	if( param === "-b" && value ){
		base = value;
	}

	if ( param === "-p" ){
		prepend = true;
	}

	if( param === "-l" && value && !isNaN(value) ){
		length = value;
	}

	if ( param === "--help" ){
		helpOnly = true;
		console.log( 
		
		"Random names generator\n\n" +

		"Example:\n" + 
		"./randomNames.js -b car -l 3 -n 100 -p\n\n" +

		"Flags:\n" +
		"-n 400		how many names to generate\n" +
		"-b something	the base (no spaces)\n" +
		"-p 		prepend the random characters or not\n" +
		"-l 		length of the generated string\n\n" +

		"Piping:\n" +
		"You can pipe the printout into a text file simply by typing this:\n" +
		"./randomNames -b car -l 3 -n 100 -p > names.txt\n" 
		);
	}
}


//console.log( howMany, prepend, base, length );
if ( !helpOnly ){
	for( var i = 0; i < howMany; i++ ){
		var name = "";
		for ( var j = 0; j < length; j++ ){
			var rnd = Math.floor( Math.random()*characters.length );
			var c = characters[rnd];
			name += c;
		}
		if ( prepend ){
			name += base;		
		} else {
			name = base + name;
		}
		//console.log( name );
		process.stdout.write( name + "\n" );
	}
}
