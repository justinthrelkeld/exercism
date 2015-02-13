//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var response;
	var inputType;

	// figure out what type of statement we're getting
	var inflectionChar = (input.slice(-1));
	var onlyNumbers = /^[0-9 ,]*.$/.test(input);
	var onlyWhitespace = /^[ ]*$/.test(input);
	var onlyUpcase = (input === input.toUpperCase());

	if (inflectionChar == '!') {
		inputType = 'exclaiming';
	};

	if (inflectionChar == '?') {
		inputType = 'question';
	};

	if (onlyUpcase === true) {
		inputType = 'yelling';
	}

	if (onlyNumbers === true) {
		inputType = 'talking' ;
	}

	if (onlyNumbers === true && inflectionChar == '?') {
		inputType = 'question';
	}

	if (onlyWhitespace === true){
		inputType = 'silence';
	}

	switch (inputType){
		case 'question':
			response = 'Sure.';
			break;
		case 'yelling':
			return 'Woah, chill out!';
			break;
		case 'silence':
			response = 'Fine. Be that way!';
			break;
		default:
			response = 'Whatever.';
	}

	return response;
};

module.exports = Bob;
