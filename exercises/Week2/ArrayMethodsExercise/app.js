//push(item[s] you want to add) -- add items to the END of your array

// modifies original array
// returns length of new array

// const arr = [1,2,3,4]

// let returnedArr = arr.push(9)

// console.log(arr)
// console.log(returnedArr)

//pop() --- removes last item in an array

// modifies original array
// returns item that got removed

// const arr = [1,2,3,'cat']

// const returnedArr = arr.pop()

// console.log(arr)
// console.log(returnedArr)

//shift() --- removes first item from an array

// modifies original array
// returns item that got removed

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.shift()

// console.log(arr)
// console.log(returnedArr)

//unshift(item[s] you want to add) --- adding new items to beginning of the array

// modifies the original array
// length of the new array

// const arr = ['end', 'middle', 'what??']

// const returnedArr = arr.unshift('beginning', 9, ['any data types'])

// console.log(arr)
// console.log(returnedArr)


// splice(startingIndex, NumberofItemsToRemove, Items to add) --- allows to add or remove item(s) from a specified location in an array

// modifies original array
// returns an array of the items that got removed

// let str = 'I am a string'
// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(1,3)

// const newArr = str.split(' ')
// newArr.splice(3, 1, 'array')
// console.log(newArr.join('\n'))

// console.log(arr)
// console.log(returnedArr)


// slice(startingIndex, endingIndex) --- grabs item(s) from an array

// does not modify the original array
// returns the items that you sliced

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.slice(3,5)

// console.log(arr)
// console.log(returnedArr)


// indexOf(item you want to find the index of, startingIndex) --- finds the index of a specified item

// does not modify the original array
// returns the index of the specified item

// const arr = [1,2,5,9, 3,4,4,6,5]

// const returnedArr = arr.indexOf(3)

// console.log(arr)
// console.log(returnedArr)

// if(arr.indexOf(9) !== -1){
//     console.log('there is a nine in that array')
// }else{
//     console.log('there are no nines')
// }

// lastIndexOf() --- finds the last occuring index of an item in an array

// does not modify the original array
// returns the index

// const arr = [1,5,2,3,4,4,5,6,5]

// const returnedArr = arr.indexOf(5,2)


// console.log(arr)
// console.log(returnedArr)


// join(separator) --- turns an array into a string

// Does not modify the original array
// Return the string that you just turned the array into

// let str = "I am a real boy"
// const arr = ['I', 'am', 'a', 'real', 'boy']

// const returnedArr = arr.join(' ')

// console.log(arr)
// console.log(returnedArr)


// reverse() --- reverses the array

// Modifies the original array
// Returns the original array

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.reverse()

// console.log(arr)
// console.log(returnedArr)

// let str = 'I am a reversed string'
// const myArr = str.split('')
// myArr.reverse()
// str = myArr.join('')
// console.log(str)

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

const removedVeg = vegetables.pop()
const removedFruit = fruit.shift()
const indOfOrange = fruit.indexOf("orange")
const addOrange = fruit.push(fruit.indexOf('orange'))
const vegLength = vegetables.length
const food = fruit.concat(vegetables)

console.log("vegetables: ",vegetables.push(vegLength),vegetables, ) 
console.log("removed vegetables:", removedVeg)
console.log('fruit', fruit )
console.log(indOfOrange)
console.log('removed fruit:', removedFruit)
console.log('food', food)








