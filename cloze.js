// var userInput = require("./UserSearch");

var fs = require("fs");

var app = require ("./app.js");

var ClozeCard = function (text, cloze){

	this.text = text;
	this.cloze = cloze;

	this.getQuestion = function() {
		console.log(text);
	};

	this.getCloze = function() {
		console.log(cloze);
	};



};

ClozeCard();

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
		
