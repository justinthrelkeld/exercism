var Hamming = function(){}

Hamming.compute = function(a, b){
	var delta = 0;
	
	if (a.length !== b.length) {
		throw new Error('DNA strands must be of equal length.');
	} else if (a !== b){
		a = a.split('');
		b = b.split('');
		a.forEach(function(val, i){
			if (a[i] !== b[i]){
				delta++;
			}
		})
	}
	return delta;
}

module.exports = Hamming;
