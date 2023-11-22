// Question 1: How do you create an empty array in JavaScript?
// Answer: You can create an empty array in JavaScript using either of the following methods:

// 1.Using array literal syntax: let arr = [];
// 2.Using the Array() constructor: let arr = new Array();


// Question 2: How do you access the first and last elements of an array?
// Answer: You can access the first element of an array using index 0 and the last element using the index array.length - 1. For example:


// let arr = [1, 2, 3, 4];
// let firstElement = arr[0]; // 1
// let lastElement = arr[arr.length - 1]; // 4


// Question 3: How do you add an element to the end of an array?
// Answer: You can add an element to the end of an array using the push() method. For example:

// let arr = [1, 2, 3];

// arr.push(4);

// console.log(arr); // [1, 2, 3, 4]


// Question 4: How do you remove the last element from an array?
// Answer: You can remove the last element from an array using the pop() method. For example:


// let arr = [1, 2, 3];
// arr.pop(4);
// console.log(arr); // [1, 2, 3, 4]

// Question 5: How do you loop through an array in JavaScript?
// Answer: You can loop through an array using either a for loop or a forEach() method. For example:

// Using a for loop:
// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {

// console.log(arr[i]);

// }

// // Using the forEach() method:
// let arr1 = [1, 2, 3];

// arr1.forEach(function(element) {

// console.log(element);

// });

// Question 6: How do you check if an element exists in an array?
// Answer: You can check if an element exists in an array using the indexOf() method. If the element is not found, indexOf() returns -1. For example:

// let arr = [1, 2, 3];

// if (arr.indexOf(2) !== -1) {

// console.log('Element found');

// } else {

// console.log('Element not found');

// }

// Question 7: How do you remove an element from an array at a specific index?
// Answer: You can remove an element from an array at a specific index using the splice() method. For example, to remove the element at index 2:

let arr = [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let understand = arr.splice(1,5 , 'H' , 'A' , 'R', 'S', 'H');
console.log(understand)

console.log(arr); // [1, 2]