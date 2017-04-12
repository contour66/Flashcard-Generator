

var Cloze  =  require ("./cloze.js");
var Basic = require ("./basic.js");
var fs = require("fs");
var inquirer = require('inquirer');

var line = function(){
	
	console.log("\n+-------------------+");
};


var initCards = [{

		type: "input",
		name: "userInput",
		message: "Hello, do you want to [MAKE] or [REVIEW] cards?",
		choices: ["MAKE", "REVIEW"]
		
    	},
]


var basicPrompt = [{

		type: "input",
		name: "front",
		message: "Question:",
		
    	},

    	{

    	type: "input",
		name: "basic",
		message: "Answer:",

    	},
]

var clozePrompt = [{

		type: "input",
		name: "sentence",
		message: "Full Sentence:",
		
    	},

    	{

    	type: "input",
		name: "answer",
		message: "Answer:",

    	},
]


var chooseType = [{

		type: "input",
		name: "userInput",
		message: "Do you want to create a [BASIC] set or [CLOZE] set?",
		choices: ["BASIC", "CLOZE"]
    	
    	},
]

// var verifyContinue =  [{

// 		type: "input",
// 		name: "userInput",
// 		message: "Do you want to add another?",
// 		choices: ["YES", "NO"]
    	
//     	},
// ]


// var whichReview = [{

// 		type: "input",
// 		name: "userInput",
// 		message: "[BASIC] or [CLOZE]",
// 		choices: ["BASIC", "CLOZE"],
    	
//     	},
// ]

var count = 0;

function choose () {

		var input = response.userInput;

		if (input.toUpperCase() === "BASIC"){
			
			line();
			console.log("Enter the information below.");
			line();

			BasicCard();
		}

		else if (input.toUpperCase() === "CLOZE"){
			
			line();
			console.log("INSTRUCTIONS");
			line ();
			console.log("Enter the information below.")
			console.log("First enter the full sentence and then the answer that is a part of that sentence."); // Next enter your incomplete sentence			line();
			console.log("FOR EXAMPLE");
			console.log("Full sentence: The cow says moo");
			console.log("Answer: moo");
			// console.log("Partial: The cow says");

			createCloze();
		}

		else {}

	
}

// function createBasic() {
// 	// var count = 0;
	
// 	// if (count  >= 0) {
// 		inquirer.prompt(basicPrompt).then(function(response, err){
			
// 			// console.log(response.question);
// 			// console.log(response.answer);	
// 			var q = response.front; // assigning respnses to variables to pass
// 			var a = response.back;

// 			car 

			
// 			var newBasic = new Basic(err, q, a);

// 			//Retrieve info form basic.js and run
// 			newBasic.newCard();

// 			// addBasic();
// 		});
		
// }

// function createCloze(){

// 	inquirer.prompt(clozePrompt).then(function(response, err){
		
// 		// console.log(response.question);
// 		// console.log(response.answer);	
// 		var s = response.sentence; // assigning respnses to variables to pass
// 		var a = response.answer;
// 		var n = response.partial;
		
// 		var newCloze = new Cloze(err, s, a, n);

// 		// //Retrieve info form basic.js and run
// 		newCloze.newCard();
// 		// newCloze.newSent();
	  	
// 	});
// }


// var fs = require('fs');




// function readFromJsonFile(filename, cb) {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, JSON.parse(data))
//     }
//   });
// }


// function appendToJsonFile(filename, obj, cb) {
//   // First get the existing file contents as array of objects.
//   readFromJsonFile(filename, (err, data) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       data.push(obj);
//       fs.writeFile(filename, JSON.stringify(data), 'utf8', cb)
//     }
//   });
// };



// function reviewCards() {

// 		inquirer.prompt(whichReview).then(function(response, err){

// 		var input = response.userInput;

// 		if (input.toUpperCase() === "BASIC"){

// 				fs.readFile("basic.txt", "utf8", function(error, data) {
  				
//   				if (!err){// We will then print the contents of data
  					
//   					var cards = data.split("\r\n");
// 					var count = 0;
							
// 				    cards.forEach(function (card) {
						
// 						if(card.length > 50){
// 							count++;
// 							card = JSON.parse(cards);
							
						
  						
// 							console.log(card.question);
// 						}
// 					});	
// 				};
//   			});
			
// 			line();
// 			console.log("yep");
// 			line();

// 			// reviewBasic();
// 		}

// 		else if (input.toUpperCase() === "CLOZE"){
			
// 			line();
// 			console.log("INSTRUCTIONS");
// 			line ();
			
// 			// console.log("Partial: The cow says");

// 			// reviewCloze();
// 		}

// 		else {}

// 	});

// }



// function addBasic (){

// 	inquirer.prompt(verifyContinue).then(function(response, err){

// 		var input = response.userInput;
	
		
// 		if (input === "YES") {

				
// 		createBasic();
// 		// 	}

// 		// count ++;
		
// 		}

// 	});
// }


//Prompt user to ask if they would like to make or create cards
inquirer.prompt(initCards).then(function(response, err) {
	
	var input = response.userInput;

	if (err) throw err; 
	if (input.toUpperCase() === "MAKE" ){
		//Run choose function to prompt user what kind of card to make
		choose();

	

	}

	else if (input.toUpperCase() === "REVIEW"){

		console.log("Ok let's review!");
		// reviewCards();

	}

	
	else {

		console.log("Please Make a choice");	

	}
	
});











// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.