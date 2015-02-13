var Hamming = function(){}

Hamming.compute = function(a, b){
	var delta = 0;
	if (a === b){
		return delta;
	} else if (a.length === b.length) {
		a = a.split('');
		b = b.split('');

		a.forEach(function(val, i){
			if (a[i] !== b[i]){
				delta++;
			}
		})
		return delta;
	} else {
		throw new Error('DNA strands must be of equal length.');
	}
}

module.exports = Hamming;
