
// Symbol is JavaScript :  Symbols are unique and immutable values often used as property keys in objects to avoid naming conflicts. They are created using the Symbol() constructor or a shorthand notation Symbol("description"), where the optional "description" is a string that can be used for debugging or to distinguish symbols.

// Symbols are also used in various built-in JavaScript features and can be employed to define well-known symbols, such as Symbol.iterator for custom iterators and Symbol.toStringTag for specifying object types.

// Keep in mind that symbols are not enumerable, which means they won't be included when you iterate through an object's properties using for...in or Object.keys(). If you want to access all properties, including symbols, you can use Object.getOwnPropertySymbols().

// Creating a symbol
const mySymbol = Symbol();
console.log(mySymbol)
// Creating a symbol with a description
const namedSymbol = Symbol("mySymbol");
console.log(namedSymbol)
// Symbols are always unique
const anotherNamedSymbol = Symbol("mySymbol");
console.log(anotherNamedSymbol)

console.log(namedSymbol === anotherNamedSymbol); // false


const obj = {
    [namedSymbol]: "This is a symbol property"
  };
  
  console.log(obj[namedSymbol]); // "This is a symbol property"
  
