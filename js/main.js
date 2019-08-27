// const task1 = prompt("Give me 1st task to do");
// const task2 = prompt("Give me a 2nd task to do");
// const task3 = prompt("Give me 3rd task to do");

// let arrayOfTasks = [task1, task2, task3];



// console.log(arrayOfTasks);

// const  = 3;
// for(j = 0; j < limit; j++){

//     arrayOfTasks[j].push(`This will take ${Math.floor(Math.random() * 15)}`);
//     console.log(arrayOfTasks);
// };


// let example  = function (){

//     console.log("Hello There")
// }

// function example(){


// }




// let multiply = (arg1, arg2) => {return arg1 * arg2};

// multiply(2,4);

// let x = multiply(2,4);
// console.log(x)




// let names = [
// 'Jason', 'Jaime', 'Scarlet'

// ];

// const greetings = name => `Good Evening, ${name}`;

// console.log(`The array of names ${names}`, `greeting function value ${greetings('Example')}`);


// const limit = 3;
s

// for (j = 0; j < limit; j++){

// console.log(greetings(names[j]));

const h1 = document.getElementById('greeting');
const myList = document.getElementById('groceryList');
const listItem = document.getElementById('groceryItem');
const myInput = document.getElementById('getGroceryItem');


let arrayOfGroceryItems = [];

h1.innerHTML = "Jason Grocery listes";

//creat function to add onto grocery list

const addGroceryItem = (arr, value) => arr.push(value);


//parent function
// call in the baby functions

function addGroceryItemsAndDisplay(arr, value){

arr.push(value);

}

function ejectGroceryItemToList(val){


//grab list item
//goal push array items to list
groceryItem.innerHTML = val;
for(grocey = 0; grocery < arrayOfGroceryItems.length; grocery++);


}

addGroceryItem(arrayOfGroceryItems, 'Test');