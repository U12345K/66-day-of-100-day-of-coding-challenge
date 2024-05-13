// task 1
// union types 
/***************
 * UNION TYPES *
 ***************/

let myVar: string | number;

myVar = "Hello"; // Valid assignment
console.log(myVar)

myVar = 42;       // Valid assignment
console.log(myVar)


// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.

// task 2
// literal types 
/*****************
 * LITERAL TYPES *
 *****************/

let direction: "left" | "right" | "up" | "down";

function setColor(color: "red" | "green" | "blue") {
    // ...
}

// task 3
// nullabel types 
/******************
 * NULLABLE TYPES *
 ******************/

let username: string | null = "Glicher"; // The variable can hold a string or null
let ageEx: number | null = null; // The variable can hold a number or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!

// task 4
// type alice 
/**************
 * TYPE ALIAS *
 **************/

type MyString = string;

let myName: MyString = "Glitcher";

type MyStringOrNumber = string | number;

let myValue: MyStringOrNumber = 10;

// another example
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Employee = {
  name: "Bob",
  age: 25,
};

console.log(alice);
console.log(bob);

// task 5
// intersaction type 
/*********************
 * INTERSECTION TYPE *
 *********************/

type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
  };