// outstanding function
function theFeature(input,modifier){
	return input - modifier;
}

// graceful global variables declaration
var a,
 c = 1000, 
 b = 500;

// unexpected result
a = theFeature(c,b);
