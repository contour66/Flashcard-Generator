// var userInput = require("./UserSearch");

var fs = require("fs");

var app = require ("./app.js");

var logFile ="cloze.txt";

var ClozeCard = function (err, text, caption, newText){

	this.text = text;
	this.caption = caption;
	this.newText= newText;

	

	this.newCard = function() {
		
		var sentence = this.text;

		var answer = this.caption;

		// var newSent = this.newText;

		var orgSent = (JSON.stringify(sentence , null, 2));
		var orgAns = (JSON.stringify(answer , null, 2));			
		// var orgPart = (JSON.stringify(newSent, null, 2));		+ "+"  + " " + orgPart
		fs.appendFile(logFile, "\n"  + orgSent + " " + orgAns  , function(err) {
	
				// If an error was experienced we say it.
			if (err) {    
						
				console.log(err);	  
			}
			
			// If no error is experienced, we'll log the phrase "Content Added" to our node console.
			else {    
				
				console.log("Content Added!");
				
			}
			
		});		
	};	
};














// 	this.newSent = function () {

// 		fs.readFile(logFile, "utf8", function(error, data) {
//   				// We will then print the contents of data
// 			var regex = new RegExp("ReGeX" + );
// ...
// string.replace(regex, "replacement");
  				
  				
// 			});
// 	}		
// };
// 
// 		sentArr=$(sentArr).not(array2).get();
// $('#a').text(array1.join(','));

		
		// var text = (JSON.stringify( question + " " + "+"  + " " + answer, null, 2));
		// var logFile ="basic.txt";
		// // console.log(JSON.stringify(question, answer, null, 2));
		// fs.appendFile(logFile, "\r\n" + text, function(err) {
	  		
	 //  		// If an error was experienced we say it.
		// 	if (err) {    
		// 		console.log(err);	  
		// 	}
		// 	// If no error is experienced, we'll log the phrase "Content Added" to our node console.
		// 	else {    
		// 		console.log("Content Added!");	  
		// 	}
		// });	
	// };


	// };

	// this.getCloze = function() {
	// 	console.log(cloze);


	// };



// };

// ClozeCard();

// var newCloze = new ClozedCard()

//***OUTSIDE OF INQUIRER

// CREATE READE UPDATE DELETE 

// inquirer will call crud methods

// call funcitons in app js to test funcitonality






// 	ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.

	// to do thispass in the information from the prompt. 
	//use .replace(/<passed argument>/g,'');
	// store in new variable
	//this new variable becomes cloze statement.
//
// ClozeCard

// var newCloze = new ClozeCard(

module.exports = ClozeCard;
// 	};
//  should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
		
		