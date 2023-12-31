// Question 8: How do you concatenate two arrays in JavaScript?
// Answer: You can concatenate two arrays using the concat() method. For example:

let arr1 = [1, 2];

let arr2 = [3, 4];

let newArr = arr1.concat(arr2);

console.log(newArr); // [1, 2, 3, 4]

// After these basic JavaScript array interview questions, below we have provided some array interview questions in JavaScript for experienced candidates.


// Question 1: Write a function to flatten a nested array in JavaScript.


// In JavaScript, the term "flatten" typically refers to the process of converting a nested array (an array that contains other arrays as elements) into a flat array, where all nested elements are moved to the top level. This can be achieved using recursion or iteration, depending on the complexity of the nested structure.

// The basic use case for flattening an array in JavaScript is to convert a nested array (an array containing other arrays as elements) into a flat array, where all the nested elements are moved to the top level. This can be particularly useful in various scenarios, including:

// Working with API Responses:

// When fetching data from an API, the response might include nested arrays. Flattening the array can simplify data processing and make it easier to work with.
// Recursive Data Structures:

// In applications that deal with recursive data structures, like tree-like structures represented as arrays, flattening can be used to convert the structure into a simpler, flat array.
// Data Manipulation:

// When dealing with complex data structures, flattening arrays can make it easier to perform operations such as filtering, mapping, or reducing.
// User Interface Rendering:

// In front-end development, especially when working with frameworks like React or Vue.js, flattening arrays can be useful when rendering dynamic components or lists with varying levels of nesting.

function flattenArray(arr) {
    let flatArray = [];
  
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        // If the element is an array, recursively call flattenArray
        flatArray = flatArray.concat(flattenArray(element));
      } else {
        // If the element is not an array, add it to the flatArray
        flatArray.push(element);
      }
    });
  
    return flatArray;
  }
  
  const nestedArray = [1, [2, [3, 4], 5], 6];
  const flattenedArray = flattenArray(nestedArray);
  
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
  
  //In JavaScript, the Array.isArray() method is used to determine whether a given value is an array. It returns true if the value is an array and false otherwise. This method is particularly useful because the typeof operator can be misleading when checking the type of an array.

// Here's an example:
const arr = [1, 2, 3];

console.log(Array.isArray(arr));  // Output: true
console.log(Array.isArray("hello"));  // Output: false
console.log(Array.isArray({ key: "value" }));  // Output: false
