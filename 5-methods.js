a = 12.234
b = 345.234

let z = new Number (40); // treating number as an object
console.log (typeof z)   // this method shouldn't be used, discouraged

console.log (b.toFixed(2));
console.log (typeof b)
console.log (typeof (b.toFixed(2)))
// .toFixed() creates a new string, as the origirnal is a primitive data type

console.log (b.toPrecision (4)); 
console.log (typeof (b.toPrecision (4))); // give precise value of a digit, also create a new string
console.log(b.toString())


let c = b;

c = c - 100
console.log(c)
console.log(b)
console.log (b==c)


// Maths functions

console.log(Math.abs (-5))    // basically modulus
// normal functions like pi, max, min, ceil, floor, sqrt

console.log (Math.random()) // as usual, to generate random number but [0, 1)

// for a dice

console.log (Math.ceil(Math.random()*6))   // the number multiplied is the number of outcomes
// basic random formula
// Math.floor (Math.random () * (max - min + 1)) + 1    #most common method
// Math.ceil (Math.random () * (max - min + 1))      #rare