var arr = ["one", "two", "three", "four", "five"];

function reverse(array) {
	var reverseArray = [];
	if(Array.isArray(array)) {	
		for (var i = arr.length - 1; i >=0; i--){
			reverseArray.push(arr[i]); 
		}
		debugger;
		console.log(true);
		return reverseArray;
	}
	return false;
};
