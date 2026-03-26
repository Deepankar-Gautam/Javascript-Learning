/*

back tick `` to create a string

*/


// length of string

str = `Arbitar Rover`

console.log (str.length)  //space is also a character
console.log (str[8])  // to access a character
console.log (str.toUpperCase()) // to uppercase all the characters
// but does it changes the original string?
console.log (str)
console.log (str.indexOf(`Rov`))
console.log (str.lastIndexOf(`Rov`))


//slice

console.log (str.slice(8,13))    // slice(start, finish)
console.log (str.slice(-8,-3))

st = `   Mighty`
r = `God Killer   `

console.log (st + ` ` + r)
console.log ( 23 + 24 + str + `rover`)
console.log (st.trim() + ` ` + r.trim())    // use of trim

// .split () same use as python

let time = Date()

console.log (time)