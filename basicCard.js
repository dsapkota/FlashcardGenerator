function BasicCard(front, back){
	this.front = front;
	this.back = back;
	};

	BasicCard.prototype.printInfo = function(){
		console.log("Front: " + this.front + "\nBack: " + this.back);
	};

	BasicCard.prototype.printFront = function(){
		console.log("Front: " + this.front)
	}
	// this.answer = function(answer){
	// 	if (this.answer === this.back){
	// 		console.log("Correct!");
	// 		tally++;
	// 	}
	// }

module.exports = BasicCard;