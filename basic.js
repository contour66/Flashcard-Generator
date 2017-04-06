var fs = require("fs");

var app = require ("./app.js");



var BasicCard = function (err, question, answer ){

	this.question = question;
	this.answer = answer;
	
	this.newCard = function() {
		
		var text = (JSON.stringify( question + " " + "+"  + " " + answer, null, 2));
		
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

};

	//}





// object -> string
	// JSON.stringify(objName)

	// string -> object
	// JSON.parse(stringContents)
	// console.log(this.answer, this.question, "this part is working");
	
	// this.createNew = function(){
		

		// }
		  var logFile = "log.txt"
// var Washington = new BasicCard("Who is washington?", "first president");

module.exports = BasicCard;