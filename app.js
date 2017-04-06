var Cloze  =  require ("./cloze.js");

var Basic = require ("./basic.js");

// var Prompts = require ("./prompts.js");

var inquirer = require('inquirer');

var line = function() {console.log("\n+-------------------+");}

var initPrompt = [{

		type: "confirm",
		name: "continue",
		message: "Hello, do you want create notecards?",
		
    	},
]


var keepGoing = [{

		type: "input",
		name: "continue",
		message: "Create another card?",
		
    	},
]

var basicPrompt = [{

		type: "input",
		name: "question",
		message: "Question:",
		
    	},

    	{

    	type: "input",
		name: "answer",
		message: "Answer:",

    	},
]

var clozePrompt = [{

		type: "input",
		name: "question",
		message: "Full Sentence:",
		
    	},

    	{

    	type: "input",
		name: "answer",
		message: "Answer:",

    	},
]


// function prompter (name) {

// 	inquirer.prompt(name);
// // }

// prompter(clozePrompt);

var chooseType =[{

		type: "input",
		name: "userInput",
		message: "Do you want to create a [BASIC] set or [CLOZE] set?",
		choices: ["BASIC", "CLOZE"]
    	
    	},
]

inquirer.prompt(chooseType).then(function(response, err) {
	
	var input = response.userInput;


	if (input.toUpperCase() === "BASIC"){  //using dot notation to grab input
		
		// console.log(answers.userInput);
		console.log("Ok let's start!");
		line();
		console.log("Enter the information below.");
		line();
		
		inquirer.prompt(basicPrompt).then(function(response, err){
			
			// console.log(response.question);
			// console.log(response.answer);
			
			var q = response.question; // assigning respnses to variables to pass
			var a = response.answer;
			
			var newBasic = new Basic(err, q, a);

			newBasic.newCard();
		  	//Retrieve info form basic.js and run
		});
	}
	
	else if (input === "Cloze"){
	
		console.log("something else");	
	}

	else {

		console.log("Please Make a choice");	

	}
	
});


// console.log(userInput);
// var answer = process.argv[3];

// function runCloze () { // runs the clozecard 
// 	console.log("it worked");
// }

// switch (chooseType) {
//   case 'Basic':
//     console.log("Ok let's make a basic set");
//     // var  card = new ClozeCard();
//     break;
//   case 'Cloze':
    
//     break;

// }



// Create a ClozeCard constructor. It should accept text and cloze arguments.



// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.