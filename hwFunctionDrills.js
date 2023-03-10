//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.
var sampleArray = [1, 2, 3, 4, 5]
let sumOfFirstAndLast = function (array) {
    return sampleArray[0] + sampleArray[sampleArray.length - 1]
}
console.log(sumOfFirstAndLast(sampleArray))
// expected output =>  sum = 6

// 2. Write a JavaScript program to find the leap years in a given range of years.
    //Every fours years an extra day is added to a calendar year, making 365, 366.
    //Febraury will then have 29 days instead of 28
    //the first year in a series of leap years should start with a year that is evenly divisible by 4 

let rangeOfYears = [1966,1989]

const leapYears = rangeOfYears => {
  while (rangeOfYears[0] % 4 != 0) {
    ++rangeOfYears[0]
  }
  while (rangeOfYears[1] % 4 != 0) {
    --rangeOfYears[1]
  }
  
  const listGenerator = () => {
    let yearStart = rangeOfYears[0]
    let yearend = rangeOfYears[1]
    let arrOfLeaps = []
    while (yearStart <= yearend) {
      arrOfLeaps.push(yearStart)
      yearStart +=4
    }
    return arrOfLeaps
  }
  const list = listGenerator()
  let numLeap = list.length
   
  return `${numLeap} leap years between ${rangeOfYears[0]} and ${rangeOfYears[1]} (${list}).`;
}
console.log(leapYears(rangeOfYears))
    
// 3. Write a JavaScript function to sort the following array of objects by title value.
//object should be in order of Suzanne,Bill,Steve based on title.

 var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function orderByTitle(obj) {
  obj.sort((a, b) => {
    let fa = a.title.toLowerCase(),
      fb = b.title.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
  });
  return library
}
console.log(orderByTitle(library))

// 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
// Test Data :
//let testArray = [2, "11", 3, "a2", false, 5, 7, 1]
//above should equal 18

let testArray = [2, 3, 0, 5, 7, 8, true, false]
// should equal 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

//iteratae through the array and check if the data type is Number

let arrayNumAccumulator = function (array) {
  let sumArray = []
  let sum = 0
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sumArray.push(array[i])
    }
  }
  for (const item of sumArray) {
    sum += item;
  }
  return sum
}
console.log(arrayNumAccumulator(testArray))

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price.
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    { name: "lime", price: 10 },
    {name: 'Gin and Tonic', price: 13}
  ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function orderByPrice(obj2) {
  obj2.sort((a, b) => {
    let fa = a.price
    let fb = b.price

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
  });
  return drinks;
}
console.log(orderByPrice(drinks))
