function sumaInfinita() {

	return Array.prototype.reduce.call(arguments, function(prevVal, curVal, index) {
		return prevVal + curVal;
	});
}