/*===========Today's learnings===============

==========Loops=============

(1) For loop

for (condition){
    operation
}


(2) While loop

initialization of variable

while (initial condition) {
    operation
    further conditions
}


(3) Do-While

initialization of variable

do{
    operations
    further conditions
    }while(initial condition)

*/


// for loop

for (i = 0; i < 10; i++){
    console.log (i)
}

for (i = 10; i > 0; i--){
    console.log(i)
}


// while loop

i = 5

while(i != 10){
    console.log(i * 10)
    i ++
}


// do while

x = 2

do {
    console.log(x)
    x = x * 2
}while (x < 100);


// if else condition

let into = 20

if (into > 18) {
    console.log ("So you are an aduld");
}
else if (into < 18) {
    console.log ("Dayum, you are such a baby")
}
else {
    console.log("My man just turned adult")
}


console.log ()