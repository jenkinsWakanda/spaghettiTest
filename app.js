// outstanding function
function theFeature(input,modifier){
	return input - modifier;
}

// graceful global variables declaration
var a,
 c = 2, 
 b = 5;

// unexpected result
a = theFeature(c,b);
