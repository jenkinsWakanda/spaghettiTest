// outstanding function
function theFeature(input,modifier){
	return input - modifier;
}

// graceful global variables declaration
var a, 
 b = 500,
 c = 1000;

// unexpected result
a = theFeature(b,c);
