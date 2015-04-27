var arr = ["one", "two", "three", "four", "five"];
var reverseArray = [];

function reverse(array) {
	for (i = arr.length - 1; i >=0; i--){
		reverseArray.push(arr[i])
	}
	if(Array.isArray(array)) {
		console.log(true);
		return reverseArray;
		
	}
	return false;
};