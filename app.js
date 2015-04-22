// outstanding function
function theFeature(input,modifier){
	return input - modifier;
}

// graceful global variables declaration
var a, 
 b = 1000,
 c = 500;

// unexpected result
a = theFeature(b,c);
