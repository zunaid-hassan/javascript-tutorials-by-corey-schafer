log = console.log;
table = console.table;

var output1 = document.getElementById("example1") || "<div></div>";
var output2 = document.getElementById("example2") || "<div></div>";
var output3 = document.getElementById("example3") || "<div></div>";
var output4 = document.getElementById("example4") || "<div></div>";
var output5 = document.getElementById("example5") || "<div></div>";
var output6 = document.getElementById("example6") || "<div></div>";
var output7 = document.getElementById("example7") || "<div></div>";
var output8 = document.getElementById("example8") || "<div></div>";
var output9 = document.getElementById("example9") || "<div></div>";
var output10 = document.getElementById("example10") || "<div></div>";
var output11 = document.getElementById("example11") || "<div></div>";
var output12 = document.getElementById("example12") || "<div></div>";
var output13 = document.getElementById("example13") || "<div></div>";
var output14 = document.getElementById("example14") || "<div></div>";
var output15 = document.getElementById("example15") || "<div></div>";
var output16 = document.getElementById("example16") || "<div></div>";
var output17 = document.getElementById("example17") || "<div></div>";
var output18 = document.getElementById("example18") || "<div></div>";
var output19 = document.getElementById("example19") || "<div></div>";
var output20 = document.getElementById("example20") || "<div></div>";

// isArray() Example
// Returns Boolean

var string1 = "Test";
var object1 = { name: "test" };
var array1 = [0, 1, 2, 3, 4, 5];

var testString = Array.isArray(string1);
var testObj = Array.isArray(object1);
var testArray = Array.isArray(array1);

output1.innerHTML = "String: " + testString + "<hr>";
output1.innerHTML += "Object: " + testObj + "<hr>";
output1.innerHTML += "Array: " + testArray;

// END isArray()

// length Example
// Returns Number of Elements

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var arrayLen = array2.length;

//output2.innerHTML = 'Length: ' + arrayLen;

var sum = 0;

for (var i = 0; i < array2.length; i++) {
  sum += array2[i];
}

output2.innerHTML += "Total: " + sum;

// END length

// indexOf() / lastIndexOf() Example
// Returns Number of first/last index of matching parameter

/*var array31 = [1,2,3,1,2,3,1,2,3];

var indexOfThree = array31.lastIndexOf(3,6);
// Start position

output3.innerHTML = 'Index of 3: ' + indexOfThree + '<hr>';*/

var array32 = ["Corey", "Rob", "Micky", "Rob", "Stan"];

var indexOfRob = array32.lastIndexOf("Rob");

output3.innerHTML += "Index of Rob: " + indexOfRob + "<hr>";

var indexOfJoey = array32.indexOf("Joey");

output3.innerHTML += "Index of Nonexistent: " + indexOfJoey;

// END indexOf()

// push() / pop() Example
// Returns new length of array / element that was popped
// Alters original

var array4 = [1, 2, 3];

// Push One
array4.push("One");

output4.innerHTML += "Push: " + array4.toString() + "<hr>";

// Push Two
array4.push("Two");

output4.innerHTML += "Push: " + array4.toString() + "<hr>";

// POP
array4.pop();

output4.innerHTML += "Pop: " + array4.toString() + "<hr>";

// POP
array4.pop();

output4.innerHTML += "Pop: " + array4.toString();

// END push() / pop()

// unshift() / shift() Example
// Returns new length of array / element that was shifted
// Alters original

var array5 = [1, 2, 3];

//Unshift One
array5.unshift("One");

output5.innerHTML += "Unshift: " + array5.toString() + "<hr>";

//Unshift Two
array5.unshift("Two");

output5.innerHTML += "Unshift: " + array5.toString() + "<hr>";

//Shift
array5.shift();

output5.innerHTML += "Shift: " + array5.toString() + "<hr>";

//Shift
array5.shift();

output5.innerHTML += "Shift: " + array5.toString();

// END shift() / unshift()

// toString() Example

var array6 = ["This", 1, "Time"];

var string6 = array6.toString();

output6.innerHTML += "String:<br>" + string6;

// END toString()

// forEach() Example

/*var array7 = [1,2,3,4,5,6,7,8,9];

output7.innerHTML += 'Original:<br>' + array7.join(', ') + '<hr>';

// CODE timesTen

function timesTen(element, index, array) {
  array[index] = element * 10;
}

array7.forEach(timesTen);

// CODE

output7.innerHTML += 'After:<br>' + array7.join(', ') + '<hr>';*/

var array7 = [
  {
    name: "Corey",
    age: 28,
  },
  {
    name: "John",
    age: 52,
  },
  {
    name: "Steve",
    age: 36,
  },
];

function listPeople(element, index) {
  output7.innerHTML += "Person " + (index + 1);
  output7.innerHTML += "<br>Name: " + element.name;
  output7.innerHTML += "<br>Age: " + element.age + "<br><hr>";
}

array7.forEach(listPeople);

// END forEach()

// reverse() Example
// Returns Array
// Alters original

//var array8 = [0,1,2,3,4,5,6,7,8,9];
var array8 = ["Reverse", "This", "Array"];

output8.innerHTML += "Original: " + array8.toString() + "<hr>";

array8.reverse();

output8.innerHTML += "Reversed: " + array8.toString();

// END reverse()

// concat() Example
// Returns new array made up of original + values provided
// Does not alter original

var array91 = ["a", "b", "c"];
var array92 = ["d", "e", "f"];

//output9.innerHTML += 'Array 1: ' + array91.toString() + '<hr>';
//output9.innerHTML += 'Array 2: ' + array92.toString() + '<hr>';

var arrayConcat = array91.concat(array92);
// Result = ['a','b','c','d','e','f']

//output9.innerHTML += 'Concat Array: ' + arrayConcat.toString() + '<hr>';

var arrayConcat2 = array91.concat(1, 2, 3, ["d", "e", "f"]);
// Result = ['a','b','c',1,2,3,'d','e','f']

output9.innerHTML += "Concat Mixed: " + arrayConcat2.toString();

// END concat()

// join() Example
// Returns String of joined elements with seperator
// Does not alter original

//var array10 = [192,168,1,1];
//var array10 = ['Would', 'Ya', 'Look', 'At', 'That'];
var array10 = ["A", " ", "S", "t", "r", "i", "n", "g"];

var string10 = array10.join("");

output10.innerHTML += "Joined:<br>" + string10;

// END join()

// slice() Example
// Returns Array
// Does not alter original

var array11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

output11.innerHTML += "Original:<br>" + array11.join(", ") + "<hr>";

// Single Number
//var sliced = array11.slice(2);

// Begin and End
//var sliced = array11.slice(2,5);

// Negative Index array11.length
var sliced = array11.slice(-3, -1);

output11.innerHTML += "Slice:<br>" + sliced;

// END slice()

// splice() Example
// Returns an Array containing deleted elements
// Alters original

var array12 = ["Corey", "Jack", "Jill", "John", "Jane"];

output12.innerHTML += "Original:<br>" + array12.join(", ") + "<hr>";

// Deleting Elements
/*var deleted = array12.splice(2,2);

output12.innerHTML += 'Spliced:<br>' + array12.join(', ') + '<hr>';
output12.innerHTML += 'Deleted:<br>' + deleted.join(', ');*/

//Adding Elements
/*var deleted = array12.splice(2,0,['Sue','Tim','Pete']);

//With Array ['Sue','Tim','Pete']

output12.innerHTML += 'Spliced:<br>' + array12.join(', ') + '<hr>';
output12.innerHTML += 'Deleted:<br>' + deleted.join(', ');*/

//Overwriting Elements
var deleted = array12.splice(0, 3, ["Sue", "Tim", "Pete"]);

//With Array ['Sue','Tim','Pete']

output12.innerHTML += "Spliced:<br>" + array12.join(", ") + "<hr>";
output12.innerHTML += "Deleted:<br>" + deleted.join(", ");

// END splice()

// sort() Example
// Alters Original
// By Default, Sorts by Unicode

//var array13 = [4,3,2,1,10,20,30,40];

//var array13 = ['Jack', 'Jill', 'Corey', 'Pete', 'anne'];

//output13.innerHTML += 'Original:<br>' + array13.join(', ') + '<hr>';

// CODE sortNum and sortAlpha

function sortNum(a, b) {
  return b - a;
}

function sortAlpha(a, b) {
  var aLower = a.toLowerCase();
  var bLower = b.toLowerCase();
  if (aLower < bLower) return -1;
  if (aLower > bLower) return 1;
  return 0;
}

// a = 30, b = 30
// 30 - 30 = 0

// If return > 0, b then a
// If return == 0, unchanged
// If return < 0, a then b

// CODE

/*array13.sort(sortAlpha);

output13.innerHTML += 'Sorted:<br>' + array13.join(', ');*/

var array13 = [
  {
    first: "Joe",
    last: "Smith",
  },
  {
    first: "Anne",
    last: "Smith",
  },
  {
    first: "Tom",
    last: "Doe",
  },
  {
    first: "Anne",
    last: "Doe",
  },
];

// CODE sortNames

function sortNames(a, b) {
  var aLower = a.first.toLowerCase();
  var bLower = b.first.toLowerCase();
  var aLast = a.last.toLowerCase();
  var bLast = b.last.toLowerCase();
  if (aLower == bLower) {
    if (aLast < bLast) return -1;
    if (aLast > bLast) return 1;
    return 0;
  }
  if (aLower < bLower) return -1;
  if (aLower > bLower) return 1;
  return 0;
}

// CODE

// ORIGINAL
// Joe Smith, Anne Smith, Tom Doe, Anne Doe

// DESIRED
// Anne Doe, Anne Smith, Joe Smith, Tom Doe

array13.sort(sortNames);

for (var i = 0; i < array13.length; i++) {
  output13.innerHTML +=
    i + 1 + ": " + array13[i].first + " " + array13[i].last + "<hr>";
}

// END sort()

// filter() Example
// Returns Array
// Does not alter original

/*var array14 = [86,28,19,4,21,25,13,52];

output14.innerHTML += 'Original:<br>' + array14.join(', ') + '<hr>';

// CODE numOver

function numOver(element, index, theArray) {
  return element < 20;
}

var filteredArray = array14.filter(numOver);

// CODE

output14.innerHTML += 'Filtered:<br>' + filteredArray.join(', ') + '<hr>';*/

/*var array14 = [
  {
    name: 'Corey',
    age: 28
  },
  {
    name: 'John',
    age: 52
  },
  {
    name: 'Steve',
    age: 36
  }
];

output14.innerHTML += 'Original:<br>';
for(var i = 0; i < array14.length; i++) {
  output14.innerHTML += '(' + array14[i].name + ', ' + array14[i].age + ')';
}

// CODE filterAge

function filterAge(element) {
  return element.age > 30;
}

var filteredArray = array14.filter(filterAge);

// CODE

output14.innerHTML += '<hr>Filtered:<br>';
for(var i = 0; i < filteredArray.length; i++) {
  output14.innerHTML += '(' + filteredArray[i].name + ', ' + filteredArray[i].age + ')';
}*/

// END filter()

// every() Example
// Returns Boolean
// Does not alter original

/*var array15 = [86,28,19,14,21,25,13,52];

output15.innerHTML += 'Original:<br>' + array15.join(', ') + '<hr>';

// CODE isEvery

function isEvery(element) {
  return element > 10;
}

var passed = array15.every(isEvery);

// CODE

output15.innerHTML += 'Every Result:<br>' + passed;*/

/*var array15 = [
  {
    name: 'Corey',
    age: 28
  },
  {
    name: 'John',
    age: 52
  },
  {
    name: 'Steve',
    age: 36
  }
];

output15.innerHTML += 'Original:<br>';
for(var i = 0; i < array15.length; i++) {
  output15.innerHTML += '(' + array15[i].name + ', ' + array15[i].age + ')';
}

// CODE allUnder

function allUnder(element) {
  return element.age < 60;
}

var passed = array15.every(allUnder);

// CODE

output15.innerHTML += '<hr>Every Result:<br>' + passed;*/

// END every()

// some() Example
// Does not alter original

/*var array16 = [86,28,21,4,22,24,14,52];

output16.innerHTML += 'Original:<br>' + array16.join(', ') + '<hr>';

// CODE someOdd

function someOdd(element) {
  return (element % 2 == 1);
}

var passed = array16.some(someOdd);

//Code

output16.innerHTML += 'Some Result:<br>' + passed;*/

/*var array16 = [
  {
    name: 'Corey',
    age: 28
  },
  {
    name: 'John',
    age: 52
  },
  {
    name: 'Steve',
    age: 36
  }
];

output16.innerHTML += 'Original:<br>';
for(var i = 0; i < array16.length; i++) {
  output16.innerHTML += '(' + array16[i].name + ', ' + array16[i].age + ')';
}

// CODE someAge

function someAge(element) {
  return element.age > 60;
}

var passed = array16.some(someAge);

// CODE

output16.innerHTML += '<hr>Some Result:<br>' + passed;*/

// END some()

// reduce() / reduceRight() Example
// Does not alter original

//var array17 = [1,2,3,4,5];

/*var array17 = ['a','b','c','d','e']

output17.innerHTML += 'Original:<br>' + array17.join(', ');

// CODE addValues

function addValues(previous, current, index, array) {
  return previous + current;
}

var result17 = array17.reduceRight(addValues);*/

// CODE

//output17.innerHTML += '<hr>Reduce Result:<br>' + result17.toString();

/*var array17 = [
  {
    name: 'Corey',
    age: 28
  },
  {
    name: 'John',
    age: 52
  },
  {
    name: 'Steve',
    age: 36
  }
];

output17.innerHTML += 'Original:<br>';
for(var i = 0; i < array17.length; i++) {
  output17.innerHTML += '(' + array17[i].name + ', ' + array17[i].age + ')';
}

// CODE totalAge

function totalAge(previous, current) {
  return previous + current.age;
}

var result17 = array17.reduce(totalAge, 0);

//CODE

// Previous: 0
// Current: {name: 'Corey', age: 28}
// return 28

// Previous: 28
// Current: {name: 'John', age: 52}
// return 80

output17.innerHTML += '<hr>Reduce Result:<br>' + result17.toString();*/

// END reduce() / reduceRight

// map() Example
// Does not alter original

/*var array18 = [10,20,30,40,50];

output18.innerHTML += 'Original:<br>' + array18.join(', ');

// CODE addTax

function addTax(element) {
  return '$' + (element * 1.06).toFixed(2);
}

var mapped = array18.map(addTax);

// CODE

output18.innerHTML += '<hr>Mapped:<br>' + mapped.join(', ');*/

/*var array18 = ['anne','bob','corey','dan','eric', 'tommy'];

output18.innerHTML += 'Original:<br>' + array18.join(', ');

// CODE toUpper

function toUpper(element) {
  return element.toUpperCase();
}

var mapped = array18.map(toUpper);

// CODE

output18.innerHTML += '<hr>Mapped:<br>' + mapped.join(', ');*/

// END map()

// Chained Together Example

var array19 = [10, 20, 30, 40, 50];

//output19.innerHTML += 'Original:<br>' + array19.join(', ');

function addTax(current, index, array) {
  var total = current * 1.06;
  total = Math.round(total * 100) / 100;
  return Number(total.toFixed(2));
}

// CODE sumTotal
function sumTotal(previous, current) {
  return previous + current;
}

var result19 = "Please Reverse Me".split("").reverse().join("");

//CODE

output19.innerHTML += "<hr>Result:<br>" + result19;

// END Chained Together
