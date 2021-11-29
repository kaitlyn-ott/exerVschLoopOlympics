numbers = [0,1,2,3,4,5,6,7,8,9]

for (var i = 0; i < numbers.length; i ++){
	console.log(numbers[i])
}

for (var i = 9; i < numbers.length; i --){
	console.log(numbers[i])
}

var fruit = ["banana","orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i ++){
	console.log(fruit[i])
}

numberArray = []

numberArray.push(0,1,2,3,4,5,6,7,8,9)

console.log(numberArray)

for (var i = 0; i < 100; i ++){
	if (i % 2 == 0)
	{console.log(i)}
}

var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

function every_other(array){
	var newFruit = []
	for (var i = 0; i < array.length; i += 2 ){
		newFruit.push(array[i]) 
	}
	return newFruit.join(", ")
}
console.log(every_other(fruit2))  

var peopleArray = [
	{
	  name: "Harrison Ford",
	  occupation: "Actor"
	},
	{
	  name: "Justin Bieber",
	  occupation: "Singer"
	},
	{
	  name: "Vladimir Putin",
	  occupation: "Politician"
	},
	{
	  name: "Oprah",
	  occupation: "Entertainer"
	}
  ]

function getNames(array){
	var names = []
	for (var i = 0; i < array.length; i ++){
		names.push(array[i].name)
		console.log(names)

	}
	return names
}
console.log(getNames(peopleArray)) 
  
function getOccupations(array){
	var occupations = []
	for (var i = 0; i < array.length; i ++ ){
		occupations.push(array[i].occupation)
		console.log(occupations)
	}
	return occupations
}
console.log(getOccupations(peopleArray))

function everyOtherName(array){
	var names2 = []
	for (var i = 0; i < array.length; i += 2){
		names2.push(array[i].name)
		console.log(names2)

	}
	return names2
}
console.log(everyOtherName(peopleArray)) 


function everyOtherOccupation(array){
	var occupations2 = []
	for (var i = 1; i < array.length; i += 2){
		occupations2.push(array[i].occupation)
		console.log(occupations2)
	}
	return occupations2
}
console.log(everyOtherOccupation(peopleArray))




