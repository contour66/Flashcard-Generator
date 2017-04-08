var fs = require("fs");

var app = require ("./app.js");



var BasicCard = function (err, question, answer, newSent ){

	this.question = question;
	this.answer = answer;
	
	
	
	this.newCard = function() {
		var text = (JSON.stringify( question + " " + "+"  + " " + answer , null, 2));
		var logFile ="basic.txt";
		// console.log(JSON.stringify(question, answer, null, 2));
		fs.appendFile(logFile, "\r\n" + text, function(err) {
	  		
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

	this.reviewCard = function(){

		



	}

};

	//}





// object -> string
	// JSON.stringify(objName)

	// string -> object
	// JSON.parse(stringContents)
	// console.log(this.answer, this.question, "this part is working");
	
	

module.exports = BasicCard;