// npm modules to install

var inquirer = require('inquirer');
//var fs = require('fs');
var BasicCard = require('./BasicCard');

// array to store new flashcards
var flashCards = [];

// variable to keep tally of the quiz
var tally = 0;

//fs.readFile()
//inquirer prompt questions / answers 
// to be acquired from a different file

 function startFlashcards(){
 inquirer.prompt([
{
	type: "list",
	name: "action",
	message: "What would you like to do?",
	choices: ['create-basic-cards','create-cloze-cards','basic-quiz','cloze-quiz','quit']
}
]).then(function(choice){
	if (choice.action === 'create-basic-cards'){
		createBasicCard();
	} else if (choice.action === 'create-cloze-cards') {
		createClozeCard();
	} else if (choice.action === 'basic-quiz'){
		runBasicQuiz();
	} else if (choice.action === 'cloze-quiz'){
		runClozeQuiz();
	} else if (choice.action === 'quit'){
		console.log("Have a great day.");
	}
	// var newCard = new BasicCard(answers.front, answers.back);
	// newCard.printInfo();
// 	flashCards.push(newCard);
});
};
	
// 	);
startFlashcards();
// };
function createBasicCard(){
	inquirer.prompt([
	{
		type: "input",
		name: "total",
		message: "How many flashcards?",

	}
	]).then(function(input){
		console.log("Making " + parseInt(input.total) + " flashcards.");
	});
}