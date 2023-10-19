// The map() method in JavaScript creates a new array by calling a specified function on each element in the original array. The map() method does not change the original array.
// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call function on every element of the array.
let arr = [2, 5, 6, 3, 8, 9];
 
// Using map to transform elements
let newArr = arr.map(function (val, index) {
    return { key: index, value: val * val };
})
 
// Display output
console.log(newArr)

let Arr = [2,4, 6, 8, 10, 12];
let Arr2 = Arr.map(val => val * 2)
console.log(Arr2)


console.log([6, 7, 4, 5].map((val) => {
    return val * val;
}))
