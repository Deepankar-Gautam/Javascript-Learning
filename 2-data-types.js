/*===========Today's learnings===============

==========Data Types=============

(1). Primitive :-

let and const : can store
1. Number : integer, float
2. String : words
3. Boolean : true / false
4. Bigint : stores the value which can't fit in under 64 bits/8 bytes
5. Null : intentionally saying that the value is null
6. Symbol
7. Undefined : unintentional absence of a value   Note : Not valid for "const"

(2). Non - Primitive :- 

1. Array
2. Object
3. Function

----------------------------------------------
Note :-
1. Data type of "null" is "object", this is a bug which was never fixed to avoid breakage of old codes.

2. let and const Symbol looks same but are indeed different.

3. All non primitive data types are as "object".

4. variable storing function gives data type as "function", but at the end they are just "object".

5. All primitive data types are "immutable" whereas all non primitive data types are "mutable".

6. 



*/

// Primitive 

let num = 13   // number

console.log (num)

console.log (typeof num)  // tells the data type

let str = "rover"    // string

console.log (str)

console.log (typeof str)

let bass = true    // boolean

console.log (bass)

console.log (typeof bass)

let name    // undefined  ,  Note : Not valid for "const"

console.log(name)

console.log (typeof name)

let big_integer = 3324746444566543n   // Big integer, stores the value which can't fit in under 64 bits

console.log (big_integer)

console.log (typeof big_integer)

let gamma = null  // null, intentionally saying that the value is null

console.log(gamma)

console.log (typeof gamma)    //  Note : this bug gives null as object

let id1 = Symbol ("id1")    // Symbol

console.log(id1)

console.log (typeof id1)

const id2 = Symbol("id2")

console.log(id2)

console.log(id1 == id2)         // let and const Symbols are different


// Non - Premitive

let array = [ 1, 2, 3, "Rover", true]    // Array

console.log(array)

console.log (typeof array)     // all non premitive are object

let object = {
    title : "Rover",
    origin : "Unknown",
    age : 21,
    alive : true
}

console.log(object)

function print (){
    console.log("Rover")
}

print()

console.log (typeof print)

let fu = function nuub (){
    console.log ("Rover")
}

console.log (fu)
fu()    // can't access like "nuub()"
console.log (typeof fu)

let n1 = "Rohan"    // immutability

n1 = "Mohan"    // new memory created, no change in original "Rohan" data


list = ["Rohan", "Mohan", "Sohan"]    // mutability

console.log(list)

list[1] = "Karan"

console.log (list)


// deep copy and shallow copy

let a = 10    // deep copy

b = a     // shallow copy

b = 20 

console.log (a, b)


// pass by value

let doc1 = {
    g1 : "Rohan",
    g2 : "Sohan"
}

let doc2 = doc1     // Both variable points to same memory location

console.log (doc1)

doc1.g1 = "Karan"

console.log (doc1)

doc2.g1 = "Maran"

console.log (doc2)

console.log (doc1)


