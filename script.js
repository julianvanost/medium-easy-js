const isEven = function (x) {
  if (x % 2 === 0) {
    return true
  }
  return false
}
console.log(isEven(12))
console.log(isEven(13))

const isEvenTwo = function (x) {
  return x % 2 === 0 ?: true, false
}
console.log(isEvenTwo(143))
console.log(isEvenTwo(32))

const isEvenThree = function (x) {
  return x % 2 === 0
}
console.log(isEvenThree(10))
console.log(isEvenThree(14))

const isEvenFour = function (x) {
  return !(x % 2)
}
console.log(isEvenFour(10))
console.log(isEvenFour(14))





let isBolean = function (t, f) {
  inpt = prompt("True or False?")
}
isBolean() // uncomment to run the prompt function
if (inpt == "true" || inpt == "True" || inpt == true) {
  alert("True")
} else if (inpt = "false" || inpt = "False" || inpt == false) {
  alert("False")
} else {
  alert("something else")
}

const numEven = x => {
  return !(x % 2)
}
console.log(numEven("numEven: " + 14))
console.log(numEven("numEven: " + 13))

//same as above, but simplified with arrow function. Does not require curly brackets if it is only returning one item
const numEvenSimplified = x => !(x % 2)
console.log(numEvenSimplified("numEvenSimplified: " + 14))
console.log(numEvenSimplified("numEvenSimplified: " + 14))

//if no parameters, simply use underscore before arrow function, e.g: "const function = _ => { function body }"
const newFunk = _ => {
  //do this
}
newFunk() //function call