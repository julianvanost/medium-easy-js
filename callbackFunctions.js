const myFunction = function (value) {
  value()
}

const otherFunction = function () {
  console.log('hi')
}
myFunction(otherFunction)

// const myFunction = function (value) {
//   console.log('Hello')
// }

let counter = 0
document.getElementById('plusBtn').addEventListener("click", function () {
  console.log(counter++)
  document.getElementById('clickCounter').textContent = counter
})
document.getElementById('minusBtn').addEventListener("click", function () {
  console.log(counter--)
  document.getElementById('clickCounter').textContent = counter
})
document.getElementById('resetBtn').addEventListener("click", function () {
  console.log(counter = 0)
  document.getElementById('clickCounter').textContent = counter
})