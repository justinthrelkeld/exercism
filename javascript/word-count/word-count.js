var words = function(text){
	text = text.split(/\s+/g);
	var words = {};
	text.forEach(function(word){
		if (word !== ''){
			words.hasOwnProperty(word) ? words[word] = words[word] + 1 : words[word] = 1 ;
		}
	})

	return words;
}

module.exports = words;
