// array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log (array)
console.log (array.length)  // length of array

let array2 = [1, 2, `string`, true, false]  // normal array, can store anything
console.log (array2)

console.log (array2[0])
console.log (array2[1])
console.log (array2[2])        // printing elements of array
console.log (array2[3])
console.log (array2[4])
console.log (typeof array2)    // type of array is object

array2[0] = `string 2`
array2[1] = true 
array2[2] = false           // changing the elements of array, coz mutable
array2[3] = 10
array2[4] = null
console.log (array2)

array2.push (100)
array2.push (`Rover`)    // adding element at the end of the array
console.log (array2)

array2.pop ()   // removes last element of an array
console.log (array2)

array2.unshift (`alpha`)  // adding element at first index
console.log (array2)

array2.shift ()        // removing element from first index
console.log (array2)

// Note : it is not advised to use shift and unshift as it reduce the performance

for (let i = 0; i < array.length; i ++) {
    console.log (array[i])
}
console.log (array2)

for (let num in array) {
    console.log (array[num])
}

console.log (array2)
let array3 = array2             // prove that lists are mutable
array3.push(`stack`)
console.log (array2)

//slice vs splice
console.log (array2.slice(2, 5))              // slicing in array :: getting a subset of the original array

console.log (array2)
console.log (array2.splice(2, 4, `beta`, `rover`, `crimson`, 10))   // format (start, finish, start adding...)
console.log (array2)

// concatination
let array4 = array.concat (array2, array3)
console.log (array4)
// but the best method??
// spread operator
let array5 = [...array,...array2,...array3]    // this is the best method to concatinate arrays
console.log (array5)

console.log (typeof array5.toString())         // combine everything to give a string
console.log (typeof array5)

console.log (array5.join(" "))               // .join works the same as split, kinda yinyang
console.log (array5.indexOf (`rover`))         // to search the index of particular known element
console.log (array5.lastIndexOf (`rover`))     // to search the last index of particular known element
console.log (array5.includes (`rover`))       // this tells if the given element is present or not with true or false
array5.sort()          // this sorts it according to ascii table, single rule for everyonne
console.log (array5)


// to sort according to numbers

let alpha = [1, 5, 8, 4, 7, 9, 3, 7, 2]

alpha.sort ((a,b) => a-b)    // ascending order

console.log (alpha)

alpha.sort ((a,b) => b-a)    // decending order

console.log (alpha)

let beta = [1, 3, 5, [4, 2, 5, [3, 5, 8, 7], 4, 3], 4, 2, 3, 0]

console.log (beta.flat (3))     // flating the array :: converting from 3d to 2d or 2d to 1d and so on

// unknown Dimension??

console.log (beta.flat (Infinity))
