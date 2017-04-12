var fs = require("fs");

var app = require ("./app.js");

var storeCard = require ("./basic.json")
console.log(storeCard);
var BasicCard = function (err, front, back){

	this.front = front;
	this.back = back;
	
	
	this.newCard = function() {
			
		inquirer.prompt([{
			type: "input",
			name: "front",
			message: "Question:",
	    	},

	    	{
	    	type: "input",
			name: "back",
			message: "Answer:",
	    	},
		]).then(function(answers, err){		
			var card = new BasicCard(answers.front, answers.back);
			storeCard.push(card);
			var newCard = JSON.stringify(storeCard, null);
			fs.appendFile ('./basic.JSON', newCard, function(err){
			if (err) throw err; 
			console.log(card);   
			console.log(err);	  
			})
			// else {    
			// 	console.log("Content Added!");	  
			// }
		});	
	};
};
	
	
	BasicCard();

// module.exports = BasicCard;
