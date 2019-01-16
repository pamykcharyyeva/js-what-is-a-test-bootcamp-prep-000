var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat';
  return animal
}

function add2(n) {
  var two= 2
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }

   var theFunk = funkyFunction()()// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}
console.log(message)
