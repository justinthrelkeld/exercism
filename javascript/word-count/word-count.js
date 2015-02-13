var words = function(text){
	text = text.replace(/\s+/g, ' ');
	text = text.split(' ');
	var words = {};
	text.forEach(function(word){
		if (word !== ''){
			words.hasOwnProperty(word) ? words[word] = words[word] + 1 : words[word] = 1 ;
		}
	})

	return words;
}

module.exports = words;
