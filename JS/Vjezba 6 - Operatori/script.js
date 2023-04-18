var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false;
	
// 1. 
var trueFalse = !!"false" == !!"true";

// 2. 
console.log(q || x || y || z);

// 3. 
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice.toFixed(2);

console.log("Total:", totalPrice);
